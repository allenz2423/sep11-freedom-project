# Entry 3
##### 2/13/2022

## Confusion

I am using firebase as my tool, but firebase isn't easy to understand. I started tinkering around with firebase, but none of my imports would work. I didn't know why my `npm` wasn't working properly. I had consulted with a couple friends and came to the conclusion that my dependencies are out of date. What I did was go to the [`Nodesource` GitHub](https://github.com/nodesource/distributions) repository. Because I am using Ubuntu for WSL, I copied these 2 lines into my terminal. 

```curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -```

```sudo apt-get install -y nodejs```

After I ran these 2 lines, I proceeded to run install firebase using `npm install firebase` This time it ran like a charm, but because I haven't had much time to tinker around with firebase, I've only had some time to get to the basics such as importing and creating an authentication button using `firebase/auth`.

[I have used resources from Google to get started with Firebase](https://firebase.google.com/docs/web/setup)

While following the setup guide, I have learned what an `asynchronous function` is and what you could use it for. 

## Starting Out

[I have followed the starting guides to authenticate users](https://firebase.google.com/docs/auth/web/start)

I was consulting around with my friends and they all told me to start easy, try authenticating your users first. So I followed the beautifully documented guide that Google provides. There's really nothing I can really put in this blog entry because most of the code is just straight up copied from the documentations.


## EDP

I am currently at step 2 of the engineering design process. I am still on the very beginning of learning firebase. I plan on stepping into plan 3 and 4 within the next month or so by creating a functional albeit trash game and store a leaderboard using firebase.

## Skills

I haven't been able to expand on anything except for vanilla JavaScript. I have gotten pretty good at algorithms but that's about it.

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)