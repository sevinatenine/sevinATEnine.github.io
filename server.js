import express from 'express';
import AdminJS, { ComponentLoader } from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import AdminJSUpload from '@adminjs/upload';

import { Sequelize, DataTypes } from 'sequelize';

import { marked } from 'marked';

import slugify from 'slugify'

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import bcrypt from 'bcrypt'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

AdminJS.registerAdapter(AdminJSSequelize);

const componentLoader = new ComponentLoader();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const uploadFeature = (componentLoader) =>
  AdminJSUpload({
    componentLoader,
    provider: { local: { bucket: path.join(__dirname, 'public/uploads') } },
    properties: {
      key: 'coverImage',      // DB column
      file: 'uploadFile',     // virtual property
      mimeType: 'mimeType',   // optional
    },
    uploadPath: (record, filename) => {
      const ext = path.extname(filename);
      const name = path.basename(filename, ext);
      const safeFilename = slugify(name, { lower: true, strict: true }) + ext;
      
      return `uploads/articles/${record.params.id || 'new'}-${safeFilename}`;
    },
  });

const AdminUser = sequelize.define('AdminUser', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
})

const Post = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  published: { type: DataTypes.BOOLEAN, defaultValue: false }
});

const Article = sequelize.define('Article', {
  title: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: true, unique: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  coverImage: { type: DataTypes.STRING, allowNull: true },
  published: { type: DataTypes.BOOLEAN, defaultValue: false },
})

Article.beforeValidate(async (article) => {
  if (!article.slug && article.title) {
    let baseSlug = slugify(article.title, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    // Ensure uniqueness
    while (await Article.findOne({ where: { slug } })) {
      slug = `${baseSlug}-${count++}`;
    }

    article.slug = slug;
  }
});

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  componentLoader,
  resources: [
    {
      resource: Post,
      options: {
        properties: {
          slug: {
            isVisible: { list: true, edit: true, show: true },
            position: 2,
          },
          content: { 
            type: 'textarea',
            isVisible: { list: false, edit: true, show: true, filter: false },
          },
        },
      },
    },
    {
      resource: Article,
      options: {
        properties: {
          coverImage: {
            isVisible: { list: false, edit: false, show: false }
          },
          content: { 
            type: 'textarea',
            isVisible: { list: false, edit: true, show: true, filter: false },
          },
        },
      },
      features: [
        uploadFeature(componentLoader), // pass loader to plugin
      ],
    },
  ],
});

const router = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      const user = await AdminUser.findOne({ where: { email } })
      if (!user) return null

      const match = await bcrypt.compare(password, user.password)
      if (!match) return null

      return { email: user.email }
    },
    cookieName: 'adminjs',
    cookiePassword: 'taco-potato-cat-keyboard',
  },
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
)
const app = express();
app.use(adminJs.options.rootPath, router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/posts', async (req, res) => {
  const posts = await Post.findAll({ where: { published: true } });
  res.json(posts);
});


app.get('/', async (req, res) => {
  try {
    // Read all published posts
    const posts = await Post.findAll({ where: { published: true } });

    // Build HTML list items
    const postsHtml = posts.map(post => `
      <li>
        <details>
          <summary><strong>${post.title}</strong></summary>
          <div>${marked.parse(post.content)}</div>
        </details>                    
      </li>
    `).join('\n');

    // Read index.html
    const indexPath = path.join(__dirname, 'templates', 'index.html');
    let html = fs.readFileSync(indexPath, 'utf-8');

    // Replace {} placeholder with posts HTML
    html = html.replace('{projects_list}', postsHtml);

    const articles = await Article.findAll({ where: { published: true } });

    // Build HTML list items
    const articlesHTML = articles.map(art => `
      <li>
        <a href="/article/${art.slug}?from=/">${art.title}</a>              
      </li>
    `).join('\n');

    html = html.replace('{articles_list}', articlesHTML);

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/blog', async (req, res) => {
  try {
    // Read all published posts

    // Read index.html
    const indexPath = path.join(__dirname, 'templates', 'blog.html');
    let html = fs.readFileSync(indexPath, 'utf-8');

    // Replace {} placeholder with posts HTML

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/article/:slug', async (req, res) => {
  const article = await Article.findOne({
    where: { slug: req.params.slug, published: true },
  })

  if (!article) return res.status(404).send('Article not found')

  const indexPath = path.join(__dirname, 'templates', 'article.html')
  let html = fs.readFileSync(indexPath, 'utf-8')

  html = html
    .replaceAll('{title}', article.title)
    .replace('{content}', marked.parse(article.content))
    .replace('{goto}', req.query.from || "/blog")

  res.send(html)
})

const start = async () => {
  await sequelize.sync({ alter: true });
  app.listen(3000, () => console.log('Server started on http://localhost:3000'));
};

start();