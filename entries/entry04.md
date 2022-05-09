# Entry 4
##### 3/21/2022


<br>

# Using Firestore to store user inputted data.
<br>

Let's say I have a collection that is used to do everything from authenticate to store all previous posts on my freedom project. The user wants to update a post they've made before. To allow the user to do that, I could create a function that .

```js
var selection = document.querySelectorAll("div")
// Let's pretend we have code here to change the text box to an editable input form.
selection.addEventListener("keyup",function(event){
    if(event.keycode == 13) {
        db.collections("collectionName").set({
            "collectionName": event.target.value
        })
    }
})
```
This should in theory save the **ENTIRE** `div` to the firestore database. And it does! But what if we want to update just a single value? We could use the same function, but instead of setting the entire collection, we would set a single value. Let's say we want to update the text of the first div. We could do this:
```js
// we add a .doc() to the collection name to get the specific document
db.collections("collectionName").doc("target").set()
```
All we did in this was add a target document that it has to update using the `.doc()` method.

But we could circumvent this entire thing by just using the `.add()` method. This just makes it so that I don't have to set the entire collection. Saves some bandwidth and storage on the database.

Next step would be figuring out the authentication. If I am able to get an userID for every user, I can use that to make sure that only the user can update their own posts. But first of all I have to make sure that the user is logged in.
<br>


# EDP

I am finished with my MVP, so the next logical step is to go beyond my MVP and create a couple more features such as deleting posts and editing posts. Ideally I would make it like a social media platform like Discord or Twitter.

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)