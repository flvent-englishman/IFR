# I.F.R. | Inline Frame Router
Circumvent tab focusing and go incognito, hiding your search history with this multitool bookmarklet!
![image](https://github.com/TheReallyReal/IFR/assets/141452587/1ea779d4-e966-4afc-b800-6df56f95d886)

## 👋 | For Users
Go to the 'bookmarklet.js' file and copy everything there. Then paste it into the bookmarks bar by right-clicking on it.

### 📖 Instructions
Press the 'X' button in the top-left to close IFR, press the '-' button next to it to minimize IFR, and hover over the '+' button next to that so you can view all the tools. Press the '+' button on the bottom-left to create a new tab, and press any of the tabs to open them. The blue tab is the one you're currently on. Double click on a tab to either close it (1) or move it to a different position (2) — if you want to move it to a new position enter a valid numerical value.

### ❓ FAQ
* How does this work? IFR embeds an iframe within the current site you're on so whatever you do within IFR won't show up in your history!
* Why doesn't it work? Many sites don't allow people to make iframes of them to avoid impersonation, but Wikipedia does and some sites like Google allow it if it's on their own site! Anyways, use the link converter to convert supported sites into embeddable versions.
* Can this unblock sites? No, this can not unblock site — I am however looking to make a proxy within a bookmarklet so that way it can't really get blocked!
* Why does the UI look weird? I've designed IFR to look good on my school's Chromebooks, so they might not look the best on your device; I am however slowly trying to change this!

### 🪲 Debugging
* If you see a piece of paper with a sad face when you use IFR then that most likely means that site doesn't allow themselves to be made into an inframe.
* Use the link converter to convert supported links into embeddable versions, see the wiki for all the current supported sites.

## 💻 | For Developers 
Take a look at the 'code.js' file to see the code formatted, feel free to copy & modify!

### ⭐ Updates (v1.5)
1. Started work on optimizing for other screen sizes
2. Added the tab spam tool that spams new tabs
3. Opening a new tab will now ask for a link
4. The tab you're on will now turn blue
5. Couple performance boosts
6. Fixed some bugs

### 📝 To-Do
1. Make it so that you can reload certain tabs and go back & forth in them too
2. Add an ability to rename tabs and fluidly move them around
3. Increase support for more links for the link converter
4. Program the code more efficiently
5. Add an autoclicker tool
