function showToastMessage(error) {
    var x = document.getElementById("snackbar")
    x.className = "show";
    x.innerHTML = "Status Code : " + error.status + " Status Text : " + error.statusText;
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

module.exports = showToastMessage;