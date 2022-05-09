# Entry 5
##### 5/8/2022

# Using Fireauth to authenticate users.

I was thinking about how I could authenticate my users. I looked into OAuth2.0 and Firebase Authentication. I found that Firebase Authentication is a lot more simpler to implement compared to FireAuth. So I decided to read up on how it would work. Looking at the documentation at [Firebase Authentication](https://firebase.google.com/docs/auth/web/start) I was able to get a crude form of authentication working with just a few lines of code. I was able to get the user to create an account with an email and password, but the email has to be never before used and valid. To do that, I have to first create a couple forms that the user has to fill out. 

So I created a variable that gets the value of the forms aswell as a login and register button.
```js
var email = document.querySelector("#email").value;
var password = document.querySelector("#password").value;

// the following variables will only be declared later on in a function.
var reg = document.querySelector("#register");
var log = document.querySelector("#login");
```
Then using the register button, I created a function that will create a new user with the email and password.

To do that, I'll have to add an event listener to the register button.

```js
reg.addEventListener("click",function(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    auth.createUserWithEmailAndPassword(email, password).then(c => { // immediately after logging in, it redirects to the home page.
        window.location.replace("main.html");
    })

})
```
After you're registered, you are automatically logged in. Then we apply the same logic to the login button. The only difference is that I have to add an event listener to the login button and change `createUserWithEmailAndPassword()` to `signInWithEmailAndPassword()`.

I then wrote some code to detect if the user is logged in or not. I placed it in the landing page and login/register page. To do that, I have to check if they have a valid session. 

This is the code used to do that:

```js
// This is used to check if the user is not logged in. If they aren't logged in, it will redirect them to the login page.
auth.onAuthStateChanged(user => {
    if(!user) {
        window.location.replace("index.html");
    }
})

// This is used to check if the user is logged in. If they are, it will redirect them to the main page.

auth.onAuthStateChanged(user => {
    if(user) {
        window.location.replace("main.html")
    }
})

```


And finally, theres also a logout button. It's pretty simple actually. It's placed in the main page so that the user can't try to log out when they haven't even logged in yet.



To explain in laymans terms, this code checks if the user is logged in or not. If they are not logged in, it redirects them to the login page. If they are logged in, it redirects them to the home page.

```js
logout.addEventListener("click", function(){
    auth.signOut().then(function(){
        window.location.replace("index.html")
    })
})
```

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)