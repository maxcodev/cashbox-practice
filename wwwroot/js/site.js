// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const userSelected = () => {
    const inputPasswd = document.getElementById('inputPasswd');
    const value = inputPasswd.value;
    console.log(value);
}

const selectUser = document.getElementById('users');
selectUser.addEventListener('change',
    function () {
        const selectedOption = this.options[selectUser.selectedIndex];
        console.log(selectedOption.value + ': ' + selectedOption.text);
    });

const selectBox = document.getElementById('box');
selectBox.addEventListener('change',
    function () {
        const selectedOption = this.options[selectBox.selectedIndex];
        console.log(selectedOption.value + ': ' + selectedOption.text);
    });