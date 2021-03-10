"use strict";
var certColor = '#880000';
var certValue = document.querySelector("#certName");
var certSubmit = document.querySelector("#certSubmit");
var certCanvas = document.querySelector("canvas");
var certCtx = certCanvas.getContext("2d");
var certImage = document.querySelector("#init-cert");
certSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    if (certValue.value.trim() === "") {
        alert("Please fill your name");
    }
    else {
        var name_1 = certValue.value;
        //real image dimensions
        var realWidth = certImage.naturalWidth;
        var realHeight = certImage.naturalHeight;
        certCanvas.setAttribute("width", realWidth.toString());
        certCanvas.setAttribute("height", realHeight.toString());
        certCtx === null || certCtx === void 0 ? void 0 : certCtx.drawImage(certImage, 0, 0);
        certCtx.font = "bold 100px Arial";
        certCtx.textAlign = 'center';
        //name
        certCtx.fillStyle = '#000';
        certCtx.fillText(name_1, certCanvas.width / 2, 660);
        //year
        certCtx.font = "bold 40px Arial";
        certCtx.fillStyle = certColor;
        certCtx.fillText((new Date().getFullYear()).toString(), certCanvas.width / 2, 860);
        var dataSrc = certCanvas.toDataURL("image/png");
        downloadCert(dataSrc, name_1);
    }
});
function downloadCert(dataSrc, filename) {
    if (filename === void 0) {
        filename = "untitled.jpeg";
    }
    var a = document.querySelector("#download_link");
    a.setAttribute("href", dataSrc);
    a.setAttribute("download", "cert_" + filename);
    a.click();
}
