module.exports = {
    showToastMessage : function (error) {
        var x = document.getElementById("snackbar")
        x.className = "show";
        x.innerHTML = "Status Code : " + error.status + " Status Text : " + error.statusText;
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    },
    // Other methods goes here

}


//http://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
//http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js/26451885#26451885