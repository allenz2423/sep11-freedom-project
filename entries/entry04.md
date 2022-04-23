# Entry 4
##### 3/21/2022

## db.collections("example").doc("target").set("examples")

<br>

### Firestore function to update a specific value in a collection to whatever the set argument is
<br>

Let's say I have a collection that is used to do everything from authenticate to store all previous posts on my freedom project. The user wants to update a post they've made before. To allow the user to do that, I could create a function that .

```js
var selection = document.querySelectorAll("div")
// Let's pretend we have code here to change the text box to an editable input form.
selection.addEventListener("keyup",function(event){
    if(event.keycode == 13) {
        db.collections("post").doc(event.target.index())
    }
})
```
This should in theory save the **ENTIRE** `div` to the firestore database


<br>

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)