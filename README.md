# I.F.R. | Inline Frame Rerouter
Hide your search history and leave your teachers clueless with this bookmarklet! <br>
[Bookmark](javascript:(  function() {    const iframe = document.createElement('iframe');     const input = prompt('Input a link or leave blank to go to Google. YouTube links will be automatically converted into YouTube NC.');     if (input === '') {      iframe.src = 'https://google.com/';    } else if (input.startsWith('https://www.youtube.com')) {      const yt = input.split('=');      const newyt = 'https://www.youtube-nocookie.com/embed/' + yt[1];      window.open(newyt);    } else if (input.startsWith('https://youtu.be')) {      const yt = input.split('/');      const newyt = 'https://www.youtube-nocookie.com/embed/' + yt[2];      window.open(newyt);    } else if (input.startsWith('http')) {      iframe.src = input;    } else {      iframe.src = 'https://' + input;    }     iframe.style.width = '100%';     iframe.style.height = '100%';     iframe.style.position = 'fixed';    iframe.style.top = '0';     iframe.style.left = '0';     iframe.style.zIndex = '9999';     iframe.style.border = 'none';     document.body.appendChild(iframe);    window.onbeforeunload = confirmExit;    function confirmExit() {      return "?";    }  })();)

## 👋 | For Users
Learn how to effectively use this program and fix common issues.

### ❓ FAQ
1. Does this unblock websites? No.
2. Can this make you completely untraceable? No, teachers can still see what you're doing if they look at your screen.
3. How does this work? Opens Google in an iframe which is basically just a website inside another.
4. What's the benefits of using this? Hide your search history and make teachers think you're just on an innocent website.

### 🪲 Debugging
* If you see "This content is blocked. Contact the site owner to fix the issue." then that means that website doesn't allow iframes.
* A good bunch of websites don't allow iframes, so take note of that as you're using IFR.

## 💻 | For Developers 
My code is pretty much always open source and anyone can copy it, so if you see something you can improve tell me on Discord @thereallyreal!

### 📝 To-Do
1. Better UI
