javascript:(function() {
    let minimized = false,
    tabOpen = '',
    tabsOpen = 0;
    const ifr = document.createElement('section'),
    ifr_s = ifr.style,
    exitBtn = document.createElement('button'),
    exit_s = exitBtn.style,
    minimizeBtn = document.createElement('button'),
    minimize_s = minimizeBtn.style,
    menuBtn = document.createElement('button'),
    menu_s = menuBtn.style,

    tools = document.createElement('menu'),
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

    tabBtn = document.createElement('button'),
    btnTa_s = tabBtn.style,
    tabs = document.createElement('div');

    function check(link) {
        let linkNew = 'https://example.com/';
        if (link.startsWith('http')) {
            linkNew = link;
        } else {
            linkNew = 'https://' + link;
        }
        return linkNew;
    }
    function detect(link) {
        if (link.startsWith('https://www.google.com')) {
            homepage = 'https://www.google.com/';
        } else if (link.startsWith('https://search.brave.com')) {
            homepage = 'https://search.brave.com/';
        } else {
            homepage = 'https://yep.com/';
        }
        return homepage;
    }
    homepage = detect(window.location.href);
    function exit() {
        verify = confirm('💻 IFR | Are you sure you want to exit?');
        if (verify == true) {
            ifr.remove();
            exitBtn.remove();
            minimizeBtn.remove();
            menuBtn.remove();
        }
    }
    function minimize() {
        if (minimized == false) {
            minimized = true;
            menu_s.width = '0';
            menu_s.opacity = '0';
            for (let item of tabs.children) {
                item.style.width = '0';
            }
        } else {
            minimized = false;
            menu_s.width = '2.5%';
            menu_s.opacity = '.5';
            for (let item of tabs.children) {
                item.style.width = '100%';
            }
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
    function hover(item) {
        if (item == exitBtn || item == minimizeBtn) {
            if (item == exitBtn) {
                item.style.backgroundColor = '#F25022';
            } else {
                item.style.backgroundColor = '#0D0D0C';
            }
            exit_s.opacity = '1';
            minimize_s.opacity = '1';
            if (minimized == false) {
                menu_s.opacity = '1';
            }
            exit_s.boxShadow = '2px 2px 4px black';
            minimize_s.boxShadow = '2px 2px 4px black';
            menu_s.boxShadow = '2px 2px 4px black';
        } else if (item == menuBtn) {
            item.style.backgroundColor = '#0D0D0C';
            if (minimized == false) {
                exit_s.opacity = '1';
                minimize_s.opacity = '1';
                menu_s.opacity = '1';
                exit_s.boxShadow = '2px 2px 4px black';
                minimize_s.boxShadow = '2px 2px 4px black';
                menu_s.boxShadow = '2px 2px 4px black';
            }
        } else if (item == tabBtn) {
            if (item != tabBtn) {
                item.style.backgroundColor = '#0D0D0C';
            }
            item.style.opacity = '1';
            item.style.boxShadow = '2px 2px 4px black';
        } else {
            item.style.backgroundColor = '#181818';
        }
    }
    function unhover(item) {
        if (item == exitBtn || item == minimizeBtn || item == menuBtn) {
            exit_s.opacity = '.5';
            minimize_s.opacity = '.5';
            if (minimized == false) {
                menu_s.opacity = '.5';
            }
            exit_s.boxShadow = 'none';
            minimize_s.boxShadow = 'none';
            menu_s.boxShadow = 'none';
            item.style.backgroundColor = 'black';
        } else if (item == tabBtn) {
            item.style.opacity = '.5';
            item.style.boxShadow = 'none';
            item.style.backgroundColor = 'black';
        } else {
            item.style.backgroundColor = '#121212';
        }
    }
    function newTab(link) {
        if (tabsOpen < 9) {
            tabsOpen += 1;
            let name = `Tab #${tabsOpen}`;
            const tabBtn = document.createElement('button'),
            tabBtn_s = tabBtn.style,
            tab = document.createElement('iframe'),
            tab_s = tab.style;
            tabOpen = name;
            function hoverTab() {
                tabBtn_s.backgroundColor = '#0D0D0C';
                tabBtn_s.opacity = '1';
                tabBtn_s.boxShadow = '2px 2px 4px black';
            }
            function unhoverTab() {
                tabBtn_s.backgroundColor = 'black';
                tabBtn_s.opacity = '.5';
                tabBtn_s.boxShadow = 'none';
            }
            function openTab() {
                for (let item of tabs.children) {
                    item.style.display = 'none';
                }
                tab_s.display = 'block';
                tabOpen = name;
            }
            function reloadTab() {
                tab.src = tab.src;
            }
            function backTab() {
                const amount = prompt('IFR | How far back do you want to go back? Leave blank for once.');
                if (amount == '') {
                    amount = -1;
                } else {
                    amount *= -1;
                }
                iframe.contentWindow.history.go(amount);
            }
            function forwardTab() {
                const amount = prompt('IFR | How far forward do you want to go? Leave blank for once.');
                if (amount == '') {
                    amount = 1;
                }
                iframe.contentWindow.history.go(amount);
            }
            function editTab() {
                const option = prompt('💻 IFR | Do you want to close this tab or edit the tab position? Put in 1 or 2.');
                switch(option) {
                    case '1':
                        tabBtn.remove();
                        tab.remove();
                        tabOpen = '';
                        tabsOpen -= 1;
                        break;
                    case '2':
                        const position = prompt('💻 IFR | Put in a number to move the tab to.');
                        tabBtn_s.marginLeft = position > 1 ? 10 * tabsOpen - 5 + 'vh': '5vh';
                        break;
                    default:
                        alert('⛔ ERR | Please only put in 1 or 2 next time!');
                  }
            }
            function ensure() {
                if (tabOpen == name) {
                    tabBtn_s.backgroundColor = '#00A4EF';
                } else {
                    tabBtn_s.backgroundColor = 'black';
                }
            }
            if (link == '') {
                tab.src = homepage;
            } else {
                tab.src = check(link);
            }
            tab_s.width = '100%';
            tab_s.height = '100%';
            tab_s.position = 'fixed';
            tab_s.top = '0';
            tab_s.left = '0';
            tab_s.zIndex = 1000 + tabsOpen;
            tab_s.border = 'none';
            tab_s.display = 'block';

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

            ifr.append(tabBtn);
            tabBtn.onclick = function(){openTab()};
            tabBtn.ondblclick = function(){editTab()};
            tabBtn.onmouseover = function(){hoverTab()};
            tabBtn.onmouseout = function(){unhoverTab()};
            tabs.append(tab);
            setInterval(ensure, 1);
        } else {
            alert('⛔ ERR | Max amount of tabs reached!');
        }
    }
    let start = prompt('💻 IFR | Put in a link or leave blank to search.');
    if (start == '') {
        start = detect(window.location.href);
    } else {
        start = check(start);
    }
    newTab(start);
    function LC() {
        const link = prompt('🔗 CNVT | Put in a supported link to convert into an embeddable.');
        let a = 0,
        b = 0,
        linkNew = 'https://example.com/';
        if (link.startsWith('https://www.youtube.com/watch?v=')) {
            a = link.split('=');
            linkNew = `https://www.youtube-nocookie.com/embed/${a[1]}`;
        } else if (link.startsWith('https://youtu.be/')) {
            a = link.split('/');
            linkNew = `https://www.youtube-nocookie.com/embed/${a[3]}`;
        } else if (link.startsWith('https://www.engineering.com/GamesPuzzles/')) {
            a = link.split('/');
            b = a[4].split('.');
            linkNew = `https://games.engineering.com/${b[0]}/index.html`;
        } else if (link.startsWith('https://scratch.mit.edu/projects/')) {
            a = link.split('/');
            linkNew = `https://scratch.mit.edu/projects/${a[4]}/embed/`;
        } else {
            alert("⛔ ERR | Looks like that site isn't supported yet!");
        }
        newTab(linkNew);
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
    ifr.onmouseover = function(){hover(ifr)};
    ifr.onmouseout = function(){unhover(ifr)};

    ifr.append(exitBtn);
    exitBtn.onmouseover = function(){hover(exitBtn)};
    exitBtn.onmouseout = function(){unhover(exitBtn)};
    exitBtn.onclick = function(){exit()};

    ifr.append(minimizeBtn);
    minimizeBtn.onmouseover = function(){hover(minimizeBtn)};
    minimizeBtn.onmouseout = function(){unhover(minimizeBtn)};
    minimizeBtn.onclick = function(){minimize()};

    ifr.append(menuBtn);
    menuBtn.onmouseover = function(){hover(menuBtn)};
    menuBtn.onmouseout = function(){unhover(menuBtn)};
    menuBtn.onpointerenter = function(){toolsOpen()};
    menuBtn.onpointerleave = function(){toolsClose()};

    ifr.append(tools);
    tools.onpointerenter = function(){toolsOpen()};
    tools.onpointerleave = function(){toolsClose()};

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

    ifr.append(tabBtn);
    tabBtn.onclick = function(){newTab(prompt('💻 IFR | Put in a link or leave blank to search in a new tab.'))};
    tabBtn.onmouseover = function(){hover(tabBtn)};
    tabBtn.onmouseout = function(){unhover(tabBtn)};

    ifr.append(tabs);

    exitBtn.textContent = '✕';
    exit_s.fontSize = '2.5vh';
    exit_s.width = '5.6vh'; 
    exit_s.height = '4vh'; 
    exit_s.position = 'fixed';
    exit_s.top = '0'; 
    exit_s.left = '0'; 
    exit_s.zIndex = '2000';
    exit_s.margin = '.5vh';
    exit_s.color = 'white';
    exit_s.backgroundColor = 'black';
    exit_s.border = 'none';
    exit_s.opacity = '.5';
    exit_s.transitionDuration = '.1s';

    minimizeBtn.textContent = '–';
    minimize_s.fontSize = '3vh';
    minimize_s.width = '5.6vh'; 
    minimize_s.height = '4vh'; 
    minimize_s.position = 'fixed';
    minimize_s.top = '0'; 
    minimize_s.left = '0'; 
    minimize_s.zIndex = '2000';
    minimize_s.margin = '.5vh';
    minimize_s.marginLeft = '6.1vh';
    minimize_s.color = 'white';
    minimize_s.backgroundColor = 'black';
    minimize_s.border = 'none';
    minimize_s.opacity = '.5';
    minimize_s.transitionDuration = '.1s';
        
    menuBtn.textContent = '+';
    menu_s.fontSize = '3vh';
    menu_s.width = '5.6vh'; 
    menu_s.height = '4vh'; 
    menu_s.position = 'fixed';
    menu_s.top = '0';
    menu_s.left = '0';
    menu_s.zIndex = '2000';
    menu_s.margin = '.5vh';
    menu_s.marginLeft = '11.6vh';
    menu_s.color = 'white';
    menu_s.backgroundColor = 'black';
    menu_s.border = 'none';
    menu_s.opacity = '.5';
    menu_s.transitionDuration = '.1s';

    tools_s.width = '26vh';
    tools_s.height = '41vh';
    tools_s.position = 'fixed';
    tools_s.top = '0';
    tools_s.left = '0';
    tools_s.zIndex = '2001';
    tools_s.margin = '4vh';
    tools_s.marginLeft = '12vh';
    tools_s.border = 'none';
    tools_s.display = 'none';
    tools_s.backgroundColor = 'black';
    tools_s.boxShadow = '2px 2px 4px black';

    for (let item of tools.children) {
        let item_s = item.style;
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
    btnLC_s.width = '8%';  
    btnLC_s.margin = '2.7%';
    btnLC_s.marginLeft = '6%';
    
    btnAB.textContent = 'About:Blank Embedder';
    btnAB_s.width = '12%'; 
    btnAB_s.margin = '5.3%';
    btnAB_s.marginLeft = '6%';
        
    btnTC.textContent = 'Tab Cloak';
    btnTC_s.width = '6%'; 
    btnTC_s.margin = '7.9%';
    btnTC_s.marginLeft = '6%';
        
    btnHF.textContent = 'History Flooder';
    btnHF_s.width = '8.5%'; 
    btnHF_s.margin = '10.5%';
    btnHF_s.marginLeft = '6%';
        
    btnWR.textContent = 'Random Article';
    btnWR_s.width = '16vh'; 
    btnWR_s.margin = '13.1%';
    btnWR_s.marginLeft = '6%';

    btnKS.textContent = 'Kill Site';
    btnKS_s.width = '10vh'; 
    btnKS_s.margin = '15.7%';
    btnKS_s.marginLeft = '6%';

    btnTS.textContent = 'Tab Spam';
    btnTS_s.width = '12vh';
    btnTS_s.margin = '18.3%';
    btnTS_s.marginLeft = '6%';

    tabBtn.textContent = '+';
    btnTa_s.fontSize = '3vh';
    btnTa_s.width = '4vh'; 
    btnTa_s.height = '4vh'; 
    btnTa_s.position = 'fixed';
    btnTa_s.top = '0'; 
    btnTa_s.left = '0'; 
    btnTa_s.zIndex = '2001';
    btnTa_s.margin = '.25%';
    btnTa_s.marginTop = '95.5vh';
    btnTa_s.color = 'white';
    btnTa_s.backgroundColor = 'black';
    btnTa_s.border = 'none';
    btnTa_s.opacity = '.5';
    btnTa_s.transitionDuration = '.1s';

    window.onbeforeunload = confirmExit;
    function confirmExit() {
        return 0;
    }
})();
