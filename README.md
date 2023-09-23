# I.F.R. | Inline Frame Router
Circumvent tab focusing and hide from Hapara tab view. Pretty much incognito mode for your Chromebook with many other tools included.
![image](https://github.com/TheReallyReal/IFR/assets/141452587/4367171f-c2e4-4541-b475-630c339478e6)

## 👋 | For Users
Go to the 'bookmarklet.js' file and copy everything there. Then paste it into the bookmarks bar by right-clicking on it.

### 📖 Instructions
Press the 'X' button in the top-left to close IFR, press the '-' button next to it to minimize IFR, and hover over the '+' button next to that so you can view all the tools. Press the '+' button on the bottom-left to create a new tab, and press any of the tabs to open them. The blue tab is the one you're currently on. Double click on a tab to close it. You may also reload, go back, and go forward in a tab if it's same-origin.

### ❓ FAQ
* How does this work? IFR embeds an iframe within the current site you're on so whatever you do within IFR won't show up in your history!
* Why doesn't it work? Many sites don't allow people to make iframes of them to avoid impersonation, but Wikipedia does and some sites like Google allow it if it's on their own site!
* Can this unblock sites? No, this can not unblock sites — I am however looking to make a proxy within a bookmarklet so that way it can't really get blocked!
* Why does the UI look weird? I've designed IFR to look good on my school's Chromebooks, so they might not look the best on your device; I am however slowly trying to change this!

### 🪲 Debugging
* If you see a piece of paper with a sad face when you use IFR then that most likely means that site doesn't allow themselves to be made into an inframe.
* Use the link converter to convert supported links into embeddable versions, see the wiki for all the current supported sites.
* The reload, back, and forward buttons don't work unless the iframe is on the original website.

## 💻 | For Developers 
Take a look at the 'code.js' file to see the code formatted, feel free to copy & modify!

### ⭐ Updates (v1.6)
1. Optimized the UI for multiple screen sizes
2. Added the ability to reload, go back, and go forward in a tab
3. Removed tab renaming feature to temporarily fix the tab identification bug
4. Made the code more efficient
5. Added try & catch statements

### 📝 To-Do
1. Be able to move the tabs fluidly
2. Renaming tabs feature
3. Make code more efficient
