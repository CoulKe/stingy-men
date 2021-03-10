"use strict";
var certForm = document.querySelector('#certForm');
var idForm = document.querySelector('#idForm');
var getId = document.querySelector('#getId');
var getCert = document.querySelector('#getCert');
getId === null || getId === void 0 ? void 0 : getId.addEventListener('click', function () {
    idForm.style.display = 'block';
    certForm.style.display = 'none';
});
getCert === null || getCert === void 0 ? void 0 : getCert.addEventListener('click', function () {
    idForm.style.display = 'none';
    certForm.style.display = 'block';
});
