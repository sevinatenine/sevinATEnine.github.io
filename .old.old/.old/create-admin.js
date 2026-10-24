import { Sequelize, DataTypes } from 'sequelize'
import bcrypt from 'bcrypt'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
})

const AdminUser = sequelize.define('AdminUser', {
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
})

const run = async () => {
  await sequelize.sync() // 🔑 creates the table

  const password = await bcrypt.hash('BunnyFun23', 10)

  await AdminUser.create({
    email: 'simon@wirz.com',
    password,
  })

  console.log('✅ Admin user created')
  process.exit(0)
}

run()