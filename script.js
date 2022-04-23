var reg = document.querySelector("#register");
var log = document.querySelector("#login");
var error = document.querySelector("#error");
var username = document.querySelector("#Username");
var password = document.querySelector("#Password");

auth.createUserWithEmailAndPassword(username, password).then(credentials => {
    console.log(credentials)
})