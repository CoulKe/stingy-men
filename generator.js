var fileElement = document.querySelector("#upload");
fileElement.addEventListener("change", saveImage);
var submit = document.querySelector("#submit");
submit.addEventListener("click", draw);
function saveImage() {
  var image = document.querySelector("#hidden-img");
  //Select only the first image
  var uploadedFile = fileElement.files[0];
  if (uploadedFile) {
    var reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadend = function () {
      var src = this.result;
      image.setAttribute("src", src.toString());
      image.alt = uploadedFile.name;
    };
  }
}
function draw(e) {
  var name = document.querySelector("#name");
  var position = document.querySelector("#position");
  var branch = document.querySelector("#branch");
  var idNo = Math.floor(Math.random() * 80000000);
  e.preventDefault();
  var myCanvas = document.querySelector("canvas");
  var image = document.querySelector("#hidden-img");
  var id = document.querySelector("#hidden-id");
  var ctx = myCanvas.getContext("2d");
  //real image dimensions
  var realWidth = id.naturalWidth;
  var realHeight = id.naturalHeight;
  //canvas dimensions
  myCanvas.setAttribute("width", realWidth.toString());
  myCanvas.setAttribute("height", realHeight.toString());
  //Draw image
  ctx.drawImage(id, 0, 0, 320, 183);
  ctx.drawImage(image, 184, 58, 125, 105);
  ctx.font = "bold 10px Arial";
  ctx.fillText(name.value, 90, 86);
  ctx.fillText(position.value, 106, 100);
  ctx.fillText(branch.value, 101, 112);
  ctx.fillText(idNo.toString(), 94, 127);
  var dataSrc = myCanvas.toDataURL("image/png");
  var imgName = image.alt;
  downloadImage(dataSrc, imgName);
}
function downloadImage(dataSrc, filename) {
  if (filename === void 0) {
    filename = "untitled.jpeg";
  }
  var a = document.querySelector("#download_link");
  a.setAttribute("href", dataSrc);
  a.setAttribute("download", "id_" + filename);
  a.click();
}
