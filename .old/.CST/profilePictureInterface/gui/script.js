if (String(getProfilePicture()).length < 20) {
  setDefaultProfilePicture();
  saveProfilePictureToServer();
}
document.getElementById('currentProfilePicture').src = retrieveProfilePictureFromServer();


let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imageDisplay = document.getElementById("image-display");

const fileHandler = (file, name, type) => {
  if (type.split("/")[0] !== "image") {
    //File Type Error
    error.innerText = "Please upload an image file";
    return false;
  }
  error.innerText = "";
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    //image and file name
    let imageContainer = document.createElement("figure");
    let img = document.createElement("img");
    img.src = reader.result;
    console.log(reader.result);
    setProfilePicture(reader.result);
    saveProfilePictureToServer();
    imageContainer.appendChild(img);
    imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
    imageDisplay.appendChild(imageContainer);
    document.getElementById('progressBarInside').style.width="50%";
  };
};

//Upload Button
uploadButton.addEventListener("change", () => {
  imageDisplay.innerHTML = "";
  document.getElementById('progressBarInside').style.width=`5%`;
  document.getElementById('label-for-upload-button').style.backgroundColor="grey";
  document.getElementById('upload-button').disabled = true;

  uploadBarRun(5);
  Array.from(uploadButton.files).forEach((file) => {
    fileHandler(file, file.name, file.type);
  });
});

container.addEventListener(
  "dragenter",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);

container.addEventListener(
  "dragleave",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
  },
  false
);

container.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active");
  },
  false
);

container.addEventListener(
  "drop",
  (e) => {
    document.getElementById('progressBarInside').style.width=`5%`;
    document.getElementById('label-for-upload-button').style.backgroundColor="grey";
    document.getElementById('upload-button').disabled = true;
    uploadBarRun(0);
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
    let draggedData = e.dataTransfer;
    let files = draggedData.files;
    imageDisplay.innerHTML = "";
    Array.from(files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    });
  },
  false
);

window.onload = () => {
  error.innerText = "";
};



function uploadBarRun(val) {
  document.getElementById('progressBarInside').style.width=`${val}%`;
  if(val < 50) {
  window.setTimeout(function() {uploadBarRun(val+1);}, 20);
  } else {
    container.innerHTML='';
    var success = document.createElement('label');
    success.innerHTML="Successfully set profile picture &#10003";
    success.style.backgroundColor="lightgreen";
    success.style.width="18em";
    container.appendChild(success);
    var home = document.createElement('a');
    home.innerHTML="Go home";
    home.id="goHomeButton";
    home.style=`display: block;
    position: relative;
    background-color: #025bee;
    color: #ffffff;
    font-size: 1.1em;
    text-align: center;
    width: 16em;
    padding: 1em 0;
    border-radius: 0.3em;
    margin: 0 auto 1em auto;
    cursor: pointer;`;
    home.href=".../index.html";
    container.appendChild(home);
  }
}
