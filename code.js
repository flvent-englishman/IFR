javascript:(function() {
    let minimized = false,
    tabOpen = '',
    tabsOpen = 0;
    const ifr = document.createElement('section'),
    exitBtn = document.createElement('button'),
    exit_s = exitBtn.style,
    minimizeBtn = document.createElement('button'),
    minimize_s = minimizeBtn.style,
    menuBtn = document.createElement('button'),
    menu_s = menuBtn.style,
    infoBtn = document.createElement('button'),
    info_s = infoBtn.style,

    material = document.createElement('menu'),
    material_s = material.style,
    txt = document.createElement('button'),
    txt_s = txt.style,

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
    function materialOpen() {
        material_s.display = 'block';
        txt_s.display = 'block';
    }
    function materialClose() {
        material_s.display = 'none';
        txt_s.display = 'none';
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
        } else if (item == infoBtn || item == tabBtn) {
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
            info_s.opacity = '.5';
            exit_s.boxShadow = 'none';
            minimize_s.boxShadow = 'none';
            menu_s.boxShadow = 'none';
            info_s.boxShadow = 'none';
            item.style.backgroundColor = 'black';
        } else if (item == infoBtn || item == tabBtn) {
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
                        tabBtn_s.marginLeft = 5 * position - 2 + '%';
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
            tabBtn_s.margin = '.25%';
            tabBtn_s.marginTop = '95.5vh';
            tabBtn_s.marginLeft = tabsOpen > 1 ? 4.5 * tabsOpen - 2.4 + '%': '2.1%';
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
        const link = prompt('🔗 CNVT | Put in a supported link to convert into an embeddable.').toLowerCase();
        let a = 0,
        b = 0,
        linkNew = 'https://example.com/';
        if (link.startsWith('https://www.youtube.com/watch?v=')) {
            a = link.split('=');
            linkNew = `https://www.youtube-nocookie.com/embed/${a[1]}`;
        } else if (link.startsWith('https://youtu.be/')) {
            a = link.split('/');
            linkNew = `https://www.youtube-nocookie.com/embed/${a[3]}`;
        } else if (link.startsWith('https://www.engineering.com/gamespuzzles/')) {
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
        ifr.src = 'https://en.wikipedia.org/wiki/Special:Random';
    }
    function KS() {
        const verify = confirm('🔪 KLLR | Are you sure to want to kill this entire tab?');
        if (verify == true) {
            document.body.remove();
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
        
    ifr.append(infoBtn);
    infoBtn.onmouseover = function(){hover(infoBtn)};
    infoBtn.onmouseout = function(){unhover(infoBtn)};
    infoBtn.onpointerenter = function(){materialOpen()};
    infoBtn.onpointerleave = function(){materialClose()};

    ifr.append(material);
    material.onpointerenter = function(){materialOpen()};
    material.onpointerleave = function(){materialClose()};

    material.append(txt);
    txt.onpointerenter = function(){materialOpen()};
    txt.onpointerleave = function(){materialClose()};

    ifr.append(tools);
    tools.onpointerenter = function(){toolsOpen()};
    tools.onpointerleave = function(){toolsClose()};

    tools.append(btnLC);
    btnLC.onclick = function(){LC()};
    btnLC.onpointerenter = function(){toolsOpen()};
    btnLC.onpointerleave = function(){toolsClose()};
    btnLC.onmouseover = function(){hover(btnLC)};
    btnLC.onmouseout = function(){unhover(btnLC)};

    tools.append(btnAB);
    btnAB.onclick = function(){AB()};
    btnAB.onpointerenter = function(){toolsOpen()};
    btnAB.onpointerleave = function(){toolsClose()};
    btnAB.onmouseover = function(){hover(btnAB)};
    btnAB.onmouseout = function(){unhover(btnAB)};

    tools.append(btnTC);
    btnTC.onclick = function(){TC()};
    btnTC.onpointerenter = function(){toolsOpen()};
    btnTC.onpointerleave = function(){toolsClose()};
    btnTC.onmouseover = function(){hover(btnTC)};
    btnTC.onmouseout = function(){unhover(btnTC)};

    tools.append(btnHF);
    btnHF.onclick = function(){HF()};
    btnHF.onpointerenter = function(){toolsOpen()};
    btnHF.onpointerleave = function(){toolsClose()};
    btnHF.onmouseover = function(){hover(btnHF)};
    btnHF.onmouseout = function(){unhover(btnHF)};

    tools.append(btnWR);
    btnWR.onclick = function(){WR()};
    btnWR.onpointerenter = function(){toolsOpen()};
    btnWR.onpointerleave = function(){toolsClose()};
    btnWR.onmouseover = function(){hover(btnWR)};
    btnWR.onmouseout = function(){unhover(btnWR)};

    tools.append(btnKS);
    btnKS.onclick = function(){KS()};
    btnKS.onpointerenter = function(){toolsOpen()};
    btnKS.onpointerleave = function(){toolsClose()};
    btnKS.onmouseover = function(){hover(btnKS)};
    btnKS.onmouseout = function(){unhover(btnKS)};

    ifr.append(tabBtn);
    tabBtn.onclick = function(){newTab(prompt('💻 IFR | Put in a link or leave blank to search in a new tab.'))};
    tabBtn.onmouseover = function(){hover(tabBtn)};
    tabBtn.onmouseout = function(){unhover(tabBtn)};

    ifr.append(tabs);

    exitBtn.textContent = '✕';
    exit_s.fontSize = '1.2vw';
    exit_s.width = '2.5%'; 
    exit_s.height = '4%'; 
    exit_s.position = 'fixed';
    exit_s.top = '0'; 
    exit_s.left = '0'; 
    exit_s.zIndex = '2000';
    exit_s.margin = '.25%';
    exit_s.color = 'white';
    exit_s.backgroundColor = 'black';
    exit_s.border = 'none';
    exit_s.opacity = '.5';
    exit_s.transitionDuration = '.1s';

    minimizeBtn.textContent = '–';
    minimize_s.fontSize = '1.5vw';
    minimize_s.width = '2.5%'; 
    minimize_s.height = '4%'; 
    minimize_s.position = 'fixed';
    minimize_s.top = '0'; 
    minimize_s.left = '0'; 
    minimize_s.zIndex = '2000';
    minimize_s.margin = '.25%';
    minimize_s.marginLeft = '2.75%';
    minimize_s.color = 'white';
    minimize_s.backgroundColor = 'black';
    minimize_s.border = 'none';
    minimize_s.opacity = '.5';
    minimize_s.transitionDuration = '.1s';
        
    menuBtn.textContent = '+';
    menu_s.fontSize = '1.5vw';
    menu_s.width = '2.5%'; 
    menu_s.height = '4%'; 
    menu_s.position = 'fixed';
    menu_s.top = '0';
    menu_s.left = '0';
    menu_s.zIndex = '2000';
    menu_s.margin = '.25%';
    menu_s.marginLeft = '5.25%';
    menu_s.color = 'white';
    menu_s.backgroundColor = 'black';
    menu_s.border = 'none';
    menu_s.opacity = '.5';
    menu_s.transitionDuration = '.1s';
       
    infoBtn.textContent = 'i';
    info_s.fontSize = '1.2vw';
    info_s.width = '2.5%'; 
    info_s.height = '4%'; 
    info_s.position = 'fixed';
    info_s.top = '0';
    info_s.left = '0';
    info_s.zIndex = '2000';
    info_s.float = 'right';
    info_s.margin = '.25%';
    info_s.marginLeft = '97.25%';
    info_s.color = 'white';
    info_s.backgroundColor = 'black';
    info_s.border = 'none';
    info_s.opacity = '.5';
    info_s.transitionDuration = '.1s';

    material_s.width = '13.5%'; 
    material_s.height = '36%'; 
    material_s.position = 'fixed';
    material_s.top = '0'; 
    material_s.left = '0'; 
    material_s.zIndex = '2001'; 
    material_s.margin = '2%';
    material_s.marginLeft = '86.3%';
    material_s.border = 'none'; 
    material_s.display = 'none';
    material_s.backgroundColor = 'black';
    material_s.boxShadow = '2px 2px 4px black';

    txt.textContent = 'W.I.P.';
    txt_s.width = '13%'; 
    txt_s.height = '35%'; 
    txt_s.position = 'fixed';
    txt_s.top = '0'; 
    txt_s.left = '0'; 
    txt_s.zIndex = '2002'; 
    txt_s.margin = '2.25%';
    txt_s.marginLeft = '86.55%';
    txt_s.border = 'none'; 
    txt_s.display = 'none';
    txt_s.fontSize = '1vw';
    txt_s.fontFamily = 'sans';
    txt_s.color = 'white';
    txt_s.backgroundColor = 'black';

    tools_s.width = '13.5%'; 
    tools_s.height = '36%'; 
    tools_s.position = 'fixed';
    tools_s.top = '0'; 
    tools_s.left = '0'; 
    tools_s.zIndex = '2001'; 
    tools_s.margin = '2.15%';
    tools_s.marginLeft = '5.25%';
    tools_s.border = 'none'; 
    tools_s.display = 'none';
    tools_s.backgroundColor = 'black';
    tools_s.boxShadow = '2px 2px 4px black';

    for (let item of tools.children) {
        let item_s = item.style;
        item_s.fontSize = '1vw';
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
    btnLC_s.height = '3.8%'; 
    btnLC_s.margin = '2.7%';
    btnLC_s.marginLeft = '6%';
    
    btnAB.textContent = 'About:Blank Embedder';
    btnAB_s.width = '12%'; 
    btnAB_s.height = '3.8%'; 
    btnAB_s.margin = '5.3%';
    btnAB_s.marginLeft = '6%';
        
    btnTC.textContent = 'Tab Cloak';
    btnTC_s.width = '6%'; 
    btnTC_s.height = '3.8%'; 
    btnTC_s.margin = '7.9%';
    btnTC_s.marginLeft = '6%';
        
    btnHF.textContent = 'History Flooder';
    btnHF_s.width = '8.5%'; 
    btnHF_s.height = '3.8%'; 
    btnHF_s.margin = '10.5%';
    btnHF_s.marginLeft = '6%';
        
    btnWR.textContent = 'Random Article';
    btnWR_s.width = '9%'; 
    btnWR_s.height = '3.8%';
    btnWR_s.margin = '13.1%';
    btnWR_s.marginLeft = '6%';

    btnKS.textContent = 'Kill Site';
    btnKS_s.width = '5%'; 
    btnKS_s.height = '3.8%'; 
    btnKS_s.margin = '15.7%';
    btnKS_s.marginLeft = '6%';

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
