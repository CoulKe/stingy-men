let fileElement = document.querySelector("#upload");
fileElement.addEventListener("change", saveImage);
let submit = document.querySelector("#submit");
submit.addEventListener("click", draw);

function saveImage() {
  let image = document.querySelector("#hidden-img");
  //Select only the first image
  const uploadedFile = fileElement.files[0];

  if (uploadedFile) {
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadend = function () {
      let src = this.result;
      image.src = src;
      image.alt = uploadedFile.name;
    };
  }
}
function draw(e) {
    let name = document.querySelector('#name');
    let position = document.querySelector('#position');
    let branch = document.querySelector('#branch');
    let idNo = Math.floor(Math.random() * 80000000);

  e.preventDefault();
  let myCanvas = document.querySelector("canvas");
  let image = document.querySelector("#hidden-img");
  let id = document.querySelector("#hidden-id");
  let ctx = "";

  //real image dimensions
  let realWidth = id.naturalWidth;
  let realHeight = id.naturalHeight;
  //canvas dimensions
  myCanvas.setAttribute("width", realWidth);
  myCanvas.setAttribute("height", realHeight);
  //Draw image
  ctx = myCanvas.getContext("2d");

  ctx.drawImage(id, 0, 0, 320, 183);
  ctx.drawImage(image, 184, 58, 125, 105);
  ctx.font='bold 10px Arial';
  ctx.fillText(name.value, 90, 86);
  ctx.fillText(position.value, 106, 100);
  ctx.fillText(branch.value, 101, 112);
  ctx.fillText(idNo, 94, 127);

  let dataSrc = myCanvas.toDataURL('image/png')
      let imgName = image.alt;
      downloadImage(dataSrc, imgName);
}
function downloadImage(dataSrc, filename = 'untitled.jpeg') {
    let a = document.querySelector('#download_link')
    a.href = dataSrc
    a.download = filename
    a.click();
}