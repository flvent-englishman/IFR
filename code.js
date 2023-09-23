javascript:(function() {
    let minimized = false,
    homepage = window.location.href == 'https://www.google.com/' ? 'https://www.google.com/' : 'https://yep.com/',
    tabOpen = '',
    tabsOpen = 0,
    tabsEverOpen = 0;

    const ifr = document.createElement('section'),
    ifrBtns = document.createElement('div'),
    tools = document.createElement('menu'),
    tabs = document.createElement('div'),
    tabBtns = document.createElement('div'),

    exitBtn = document.createElement('button'),
    exit_s = exitBtn.style,
    minimizeBtn = document.createElement('button'),
    minimize_s = minimizeBtn.style,
    menuBtn = document.createElement('button'),
    menu_s = menuBtn.style,

    tools_s = tools.style,
    btnLC = document.createElement('button'),
    btnLC_s = btnLC.style,
    btnAB = document.createElement('button'),
    btnAB_s = btnAB.style,
    btnTC = document.createElement('button'),
    btnTC_s = btnTC.style,
    btnHF = document.createElement('button'),
    btnHF_s = btnHF.style,
    btnWR = document.createElement('button'),
    btnWR_s = btnWR.style,
    btnKS = document.createElement('button'),
    btnKS_s = btnKS.style,
    btnTS = document.createElement('button'),
    btnTS_s = btnTS.style,

    newBtn = document.createElement('button'),
    new_s = newBtn.style;

    function check(input) {
        let output = input;
        if (!input.startsWith('http')) {
            if (input != '') {
                output = 'https://' + input;
            } else {
                output = homepage;
            }
        }
        return output;
    }
    function hover(item) {
        try {
            item_s = item.style;
            if (item.parentElement == ifrBtns) {
                if (item == exitBtn) {
                    item_s.backgroundColor = '#F25022';
                } else {
                    item_s.backgroundColor = '#0D0D0C';
                }
                exit_s.opacity = '1';
                minimize_s.opacity = '1';
                exit_s.boxShadow = '2px 2px 4px black';
                minimize_s.boxShadow = '2px 2px 4px black';
                menu_s.opacity = '1';
                menu_s.boxShadow = '2px 2px 4px black';
            } else if (item == newBtn) {
                if (item != newBtn) {
                    item_s.backgroundColor = '#0D0D0C';
                }
                item_s.opacity = '1';
                item_s.boxShadow = '2px 2px 4px black';
            } else {
                item_s.backgroundColor = '#181818';
            }
        } catch(e) {
            alert(`🐱 CAT | ${e.message}`);
        }
    }
    function unhover(item) {
        try {
            item_s = item.style;
            if (item.parentElement == ifrBtns) {
                item_s.backgroundColor = 'black';
                exit_s.opacity = '.5';
                minimize_s.opacity = '.5';
                exit_s.boxShadow = 'none';
                minimize_s.boxShadow = 'none';
                menu_s.opacity = '.5';
                menu_s.boxShadow = 'none';
            } else if (item == newBtn) {
                item_s.opacity = '.5';
                item_s.boxShadow = 'none';
                item_s.backgroundColor = 'black';
            } else {
                item_s.backgroundColor = '#121212';
            }
        } catch(e) {
            alert(`🐱 CAT | ${e.message}`);
        }
    }
    function exit() {
        try {
            verify = confirm('💻 IFR | Are you sure you want to exit?');
            if (verify == true) {
                ifr.remove();
            }
        } catch(e) {
            alert(`🐱 CAT | ${e.message}`);
        }
    }
    function minimize() {
        try {
            if (minimized != true) {
                minimized = true;
                for (let item of tabs.children) {
                    item.style.width = '0';
                }
                for (let item of tabBtns.children) {
                    item.style.height = '0';
                    item.style.opacity = '0';
                }
            } else {
                minimized = false;
                for (let item of tabs.children) {
                    item.style.width = '100%';
                }
                for (let item of tabBtns.children) {
                    item.style.height = '4vh';
                    item.style.opacity = '0.5';
                }
            }
        } catch(e) {
            alert(`🐱 CAT | ${e.message}`);
        }
    }
    function toolsOpen() {
        if (minimized == false) {
            tools_s.display = 'block';
            for (let item of tools.children) {
                item.style.display = 'block';
            }
        }
    }
    function toolsClose() {
        tools_s.display = 'none';
        for (let item of tools.children) {
            item.style.display = 'none';
        }
    }
    function newTab(link) {
        try {
            tabsOpen += 1;
            tabsEverOpen += 1;
            
            let name = `Tab #${tabsEverOpen}`;

            const tab = document.createElement('iframe'),
            tab_s = tab.style,
            tabBtn = document.createElement('button'),
            tabBtn_s = tabBtn.style,
            reloadBtn = document.createElement('button'),
            reload_s = reloadBtn.style,
            backBtn = document.createElement('button'),
            back_s = backBtn.style,
            forwardBtn = document.createElement('button'),
            forward_s = forwardBtn.style;

            function over(item) {
                item_s = item.style;
                item_s.opacity = '1';
                item_s.boxShadow = '2px 2px 4px black';
                if (item != tabBtn) {
                    if (tabOpen == name) {
                        item_s.backgroundColor = '#0D0D0C';
                        reload_s.opacity = '1';
                        reload_s.boxShadow = '2px 2px 4px black';
                        back_s.opacity = '1';
                        back_s.boxShadow = '2px 2px 4px black';
                        forward_s.opacity = '1';
                        forward_s.boxShadow = '2px 2px 4px black';
                    }
                }
            }
            function unover(item) {
                const item_s = item.style;
                item_s.backgroundColor = 'black';
                item_s.opacity = '.5';
                item_s.boxShadow = 'none';
                if (item != tabBtn) {
                    if (tabOpen == name) {
                        reload_s.opacity = '.5';
                        reload_s.boxShadow = 'none';
                        back_s.opacity = '.5';
                        back_s.boxShadow = 'none';
                        forward_s.opacity = '.5';
                        forward_s.boxShadow = 'none';
                    }
                }
            }
            function open() {
                for (let item of tabs.children) {
                    item.style.display = 'none';
                }
                for (let item of tabBtns.children) {
                    item.style.display = 'none';
                }
                reload_s.display = 'block';
                back_s.display = 'block';
                forward_s.display = 'block';
                tabOpen = name;
            }
            function close() {
                const verify = confirm('💻 IFR | Are you sure to want to close this tab?');
                if (verify == true) {
                    tab.remove();
                    tabBtn.remove();
                    reloadBtn.remove();
                }
            }
            function reload() {
                tab.contentWindow.location.reload();
            }
            function back() {
                tab.contentWindow.history.back(); 
            }
            function forward() {
                tab.contentWindow.history.forward();
            }
            tabs.append(tab);

            ifr.append(tabBtn);
            tabBtn.onclick = function(){open()};
            tabBtn.ondblclick = function(){close()};
            tabBtn.onmouseover = function(){over(tabBtn)};
            tabBtn.onmouseout = function(){unover(tabBtn)};

            tabBtns.append(reloadBtn);
            reloadBtn.onclick = function(){reload()};
            reloadBtn.onmouseover = function(){over(reloadBtn)};
            reloadBtn.onmouseout = function(){unover(reloadBtn)};

            tabBtns.append(backBtn);
            backBtn.onclick = function(){back()};
            backBtn.onmouseover = function(){over(backBtn)};
            backBtn.onmouseout = function(){unover(backBtn)};

            tabBtns.append(forwardBtn);
            forwardBtn.onclick = function(){forward()};
            forwardBtn.onmouseover = function(){over(forwardBtn)};
            forwardBtn.onmouseout = function(){unover(forwardBtn)};


            open();
            function ensure() {
                if (tabOpen == name) {
                    tabBtn_s.backgroundColor = '#00A4EF';
                } else {
                    tabBtn_s.backgroundColor = 'black';
                }
            }
            tab.src = link;
            tab_s.width = '100%';
            tab_s.height = '100%';
            tab_s.position = 'fixed';
            tab_s.top = '0';
            tab_s.left = '0';
            tab_s.zIndex = '1000';
            tab_s.border = 'none';
            tab_s.display = 'block';

            for (let item of tabBtns.children) {
                item_s = item.style;
                item_s.width = '5.6vh';
                item_s.height = '4vh';
                item_s.position = 'fixed';
                item_s.top = '0';
                item_s.left = '0';
                item_s.zIndex = '2000';
                item_s.color = 'white';
                item_s.backgroundColor = 'black';
                item_s.border = 'none';
                item_s.opacity = '.5';
                item_s.transitionDuration = '.1s';
            }
            reloadBtn.textContent = '⟳';
            reload_s.fontSize = '3vh';
            reload_s.margin = '.5vh';
            reload_s.marginTop = '4.5vh';

            backBtn.textContent = '◀';
            back_s.fontSize = '2.5vh';
            back_s.marginLeft = '6.1vh';
            back_s.marginTop = '4.5vh';

            forwardBtn.textContent = '▶';
            forward_s.fontSize = '2.5vh';
            forward_s.marginLeft = '11.65vh';
            forward_s.marginTop = '4.5vh';
            
            tabBtn.textContent = name;
            tabBtn_s.fontSize = '2.5vh';
            tabBtn_s.width = '10vh';
            tabBtn_s.height = '4vh';
            tabBtn_s.position = 'fixed';
            tabBtn_s.top = '0';
            tabBtn_s.left = '0'; 
            tabBtn_s.zIndex = '2000';
            tabBtn_s.margin = '.5vh';
            tabBtn_s.marginTop = '95.5vh';
            tabBtn_s.marginLeft = tabsOpen > 1 ? 10 * tabsOpen - 5 + 'vh': '5vh';
            tabBtn_s.color = 'white';
            tabBtn_s.backgroundColor = 'black';
            tabBtn_s.border = 'none';
            tabBtn_s.opacity = '.5';
            tabBtn_s.transitionDuration = '.1s';
            
            setInterval(ensure, 1);
        } catch(e) {
            alert(`🐱 CAT | ${e.message}`);
        }
    }
    function LC() {
        const input = prompt('🔗 CNVT | Put in a supported link to convert into an embeddable.');
        let a = 0,
        b = 0,
        output = 'https://example.com/';
        if (input.startsWith('https://www.youtube.com/watch?v=')) {
            a = input.split('=');
            output = `https://www.youtube-nocookie.com/embed/${a[1]}`;
        } else if (input.startsWith('https://youtu.be/')) {
            a = input.split('/');
            output = `https://www.youtube-nocookie.com/embed/${a[3]}`;
        } else if (input.startsWith('https://www.engineering.com/GamesPuzzles/')) {
            a = input.split('/');
            b = a[4].split('.');
            output = `https://games.engineering.com/${b[0]}/index.html`;
        } else if (input.startsWith('https://scratch.mit.edu/projects/')) {
            a = input.split('/');
            output = `https://scratch.mit.edu/projects/${a[4]}/embed/`;
        } else {
            alert("⛔ ERR | Looks like that site isn't supported yet!");
        }
        newTab(output);
    }
    function AB() {
        let site = prompt('📋 EMBR | Please put in a link to embed into an about:blank page, leave blank to search.');
        if (site == '') {
            site = homepage;
        }
        if (site != null) {
            const page = window.open('about:blank');  
            page.document.write(`<iframe src='${site}' style='width:100%;height:100%;border:none'></iframe>`);
        }
    }
    function TC() {
        const title = prompt('🔍 CLKR | Please put in the name you want to rename your tab to.');
        if (title != null || title != '') {
            document.title = title;
        }
        const favicon = prompt('🔍 CLKR | Please put in an image link to change the favicon to.');
        if (favicon != null || favicon != '') {
            let icon = document.querySelector('link[rel~="icon"]');
            if (!icon) {
                icon = document.createElement('link');
                icon.rel = 'icon';
                document.head.appendChild(icon);
            }
            icon.href = favicon;
        }
    }
    function HF() {
        const amount = prompt('🌊 FLDR | Please put in an amount to flood your history by.'); 
        done = false; 
        flooder = window.location.href; 
        for (let i = 1; i <= amount; i++) {
            history.pushState(0, 0, i == amount?flooder:i.toString()); 
            if (i == amount) {
                done = true;
            }
        }
        if (done == true) {
            alert(`🌊 FLDR | History flood successful — "${flooder}" now appears in your history ${amount + (amount == 1 ? ' time.' : ' times.')}`);
        }
    }
    function WR() {
        newTab('https://en.wikipedia.org/wiki/Special:Random');
    }
    function KS() {
        const verify = confirm('🔪 KLLR | Are you sure to want to kill this entire tab?');
        if (verify == true) {
            document.body.remove();
        }
    }
    function TS() {
        const verify = confirm('💣 SPAM | Are you sure you want to spam tabs?');
        if (verify == true) {
            const website = prompt('What website do you want to spam? Input "n" for a term instead.');
            if (website == 'n') {
                const term = prompt('What term do you want to spam?');
                website = `https://www.google.com/search?q=${term}`;
            } else {
                website = website.startsWith('http') ? website : 'https://' + website;
            }
            while (true) {
                window.open(website);
            }
        }
    }
    document.body.appendChild(ifr);
    ifr.appendChild(ifrBtns);
    ifr.append(tools);
    tools.onpointerenter = function(){toolsOpen()};
    tools.onpointerleave = function(){toolsClose()};
    ifr.append(tabs);
    ifr.append(tabBtns);

    ifrBtns.append(exitBtn);
    exitBtn.onmouseover = function(){hover(exitBtn)};
    exitBtn.onmouseout = function(){unhover(exitBtn)};
    exitBtn.onclick = function(){exit()};

    ifrBtns.append(minimizeBtn);
    minimizeBtn.onmouseover = function(){hover(minimizeBtn)};
    minimizeBtn.onmouseout = function(){unhover(minimizeBtn)};
    minimizeBtn.onclick = function(){minimize()};

    ifrBtns.append(menuBtn);
    menuBtn.onmouseover = function(){hover(menuBtn)};
    menuBtn.onmouseout = function(){unhover(menuBtn)};
    menuBtn.onpointerenter = function(){toolsOpen()};
    menuBtn.onpointerleave = function(){toolsClose()};

    tools.append(btnLC);
    btnLC.onclick = function(){LC()};
    btnLC.onmouseover = function(){hover(btnLC)};
    btnLC.onmouseout = function(){unhover(btnLC)};

    tools.append(btnAB);
    btnAB.onclick = function(){AB()};
    btnAB.onmouseover = function(){hover(btnAB)};
    btnAB.onmouseout = function(){unhover(btnAB)};

    tools.append(btnTC);
    btnTC.onclick = function(){TC()};
    btnTC.onmouseover = function(){hover(btnTC)};
    btnTC.onmouseout = function(){unhover(btnTC)};

    tools.append(btnHF);
    btnHF.onclick = function(){HF()};
    btnHF.onmouseover = function(){hover(btnHF)};
    btnHF.onmouseout = function(){unhover(btnHF)};

    tools.append(btnWR);
    btnWR.onclick = function(){WR()};
    btnWR.onmouseover = function(){hover(btnWR)};
    btnWR.onmouseout = function(){unhover(btnWR)};

    tools.append(btnKS);
    btnKS.onclick = function(){KS()};
    btnKS.onmouseover = function(){hover(btnKS)};
    btnKS.onmouseout = function(){unhover(btnKS)};

    tools.append(btnTS);
    btnTS.onclick = function(){TS()};
    btnTS.onmouseover = function(){hover(btnTS)};
    btnTS.onmouseout = function(){unhover(btnTS)};

    ifr.append(newBtn);
    newBtn.onclick = function(){check(newTab(prompt('💻 IFR | Put in a link or leave blank to search in a new tab.')))};
    newBtn.onmouseover = function(){hover(newBtn)};
    newBtn.onmouseout = function(){unhover(newBtn)};

    newTab(check(prompt('💻 IFR | Put in a link or leave blank to search.')));
    
    for (let item of ifrBtns.children) {
        const item_s = item.style;
        item_s.width = '5.6vh'; 
        item_s.height = '4vh';
        item_s.position = 'fixed';
        item_s.top = '0'; 
        item_s.left = '0'; 
        item_s.zIndex = '2000';
        item_s.margin = '.5vh';
        item_s.color = 'white';
        item_s.backgroundColor = 'black';
        item_s.border = 'none';
        item_s.opacity = '.5';
        item_s.transitionDuration = '.1s';
    }
    exitBtn.textContent = '✕';
    exit_s.fontSize = '2.5vh';

    minimizeBtn.textContent = '–';
    minimize_s.fontSize = '3vh';
    minimize_s.marginLeft = '6.1vh';
        
    menuBtn.textContent = '+';
    menu_s.fontSize = '3vh';
    menu_s.marginLeft = '11.65vh';

    tools_s.width = '26vh';
    tools_s.height = '40vh';
    tools_s.position = 'fixed';
    tools_s.top = '0';
    tools_s.left = '0';
    tools_s.zIndex = '2001';
    tools_s.margin = '2.5vh';
    tools_s.marginLeft = '17.35vh';
    tools_s.border = 'none';
    tools_s.display = 'none';
    tools_s.backgroundColor = 'black';
    tools_s.boxShadow = '2px 2px 4px black';

    for (let item of tools.children) {
        const item_s = item.style;
        item_s.height = '3.8vh';
        item_s.fontSize = '2vh';
        item_s.fontFamily = 'arial';
        item_s.position = 'fixed';
        item_s.top = '0';
        item_s.left = '0';
        item_s.zIndex = '2002';
        item_s.color = 'white';
        item_s.backgroundColor = '#121212';
        item_s.border = 'none';
        item_s.display = 'none';
        item_s.transitionDuration = '.1s';
    }
    btnLC.textContent = 'Link Converter';
    btnLC_s.width = '16vh';  
    btnLC_s.margin = '4vh';
    btnLC_s.marginLeft = '19vh';
    
    btnAB.textContent = 'About:Blank Embedder';
    btnAB_s.width = '24vh'; 
    btnAB_s.margin = '9.5vh';
    btnAB_s.marginLeft = '19vh';
        
    btnTC.textContent = 'Tab Cloak';
    btnTC_s.width = '12vh'; 
    btnTC_s.margin = '15vh';
    btnTC_s.marginLeft = '19vh';
        
    btnHF.textContent = 'History Flooder';
    btnHF_s.width = '17vh'; 
    btnHF_s.margin = '20.5vh';
    btnHF_s.marginLeft = '19vh';
        
    btnWR.textContent = 'Random Article';
    btnWR_s.width = '16vh'; 
    btnWR_s.margin = '26vh';
    btnWR_s.marginLeft = '19vh';

    btnKS.textContent = 'Kill Site';
    btnKS_s.width = '10vh'; 
    btnKS_s.margin = '31.5vh';
    btnKS_s.marginLeft = '19vh';

    btnTS.textContent = 'Tab Spam';
    btnTS_s.width = '12vh';
    btnTS_s.margin = '37vh';
    btnTS_s.marginLeft = '19vh';

    newBtn.textContent = '+';
    new_s.fontSize = '3vh';
    new_s.width = '4vh'; 
    new_s.height = '4vh'; 
    new_s.position = 'fixed';
    new_s.top = '0'; 
    new_s.left = '0'; 
    new_s.zIndex = '2001';
    new_s.margin = '.25%';
    new_s.marginTop = '95.5vh';
    new_s.color = 'white';
    new_s.backgroundColor = 'black';
    new_s.border = 'none';
    new_s.opacity = '.5';
    new_s.transitionDuration = '.1s';

    window.onbeforeunload = confirmExit;
    function confirmExit() {
        return 0;
    }
})();
