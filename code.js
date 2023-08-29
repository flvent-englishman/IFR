javascript:(function() {
    let exited = false,
    minimized = false,
    tabs = 0;
    const ifr = document.createElement('iframe'),
    ifr_s = ifr.style,
    btnX = document.createElement('button'),
    btnX_s = btnX.style,
    btnMi = document.createElement('button'),
    btnMi_s = btnMi.style,
    btnMe = document.createElement('button'),
    btnMe_s = btnMe.style,
    btnIn = document.createElement('button'),
    btnIn_s = btnIn.style,
    In = document.createElement('div'),
    In_s = In.style,
    Info = document.createElement('button'),
    Info_s = Info.style,
    Me = document.createElement('div'),
    Me_s = Me.style,
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
    btnTa = document.createElement('button'),
    btnTa_s = btnTa.style; 
    function detect(page) {
        if (page.startsWith('https://www.google.com')) {
            homepage = 'https://www.google.com/';
        } else if (page.startsWith('https://search.brave.com')) {
            homepage = 'https://search.brave.com/';
        } else {
            homepage = 'https://yep.com/';
        }
        return homepage;
    }
    function check(input) {
        let a = 0,
        b = 0,
        output = 'https://example.com/';
        if (input.startsWith('https://www.youtube.com/watch?v=')) {
            a = input.split('=');
            output = `https://www.youtube-nocookie.com/embed/${a[1]}`;
        } else if (input.startsWith('https://youtu.be/')) {
            a = input.split('/');
            output = `https://www.youtube-nocookie.com/embed/${a[3]}`;
        } else if (input.startsWith('https://www.engineering.com/gamespuzzles/')) {
            a = input.split('/');
            b = a[4].split('.');
            output = `https://games.engineering.com/${b[0]}/index.html`;
        } else if (input.startsWith('https://scratch.mit.edu/projects/')) {
            a = input.split('/');
            output = `https://scratch.mit.edu/projects/${a[4]}/embed/`;
        } else {
            output = input;
        }
        return output;
    }
    const link = prompt('💻 IFR | Input a link to embed or leave blank to search.').toLowerCase(); 
    if (link == '') {
        ifr.src = detect(window.location.href);
    } else if (link.startsWith('http')) {
        ifr.src = check(link);
    } else {
        ifr.src = check(`https://${link}`);
    }
    function X() {
        if (tabs == 0) {
            ifr.remove();
            btnX.remove();
            btnMi.remove();
            btnMe.remove();
            btnIn.remove();
            In.remove();
            Info.remove();
            Me.remove();
            btnLC.remove();
            btnAB.remove();
            btnTC.remove();
            btnHF.remove();
            btnWR.remove();
            btnKS.remove();
            btnTa.remove();
            exited = true;
        } else {
            alert('⛔ ERR | Close all your tabs before closing!');
        }
    }
    function Mi() {
        if (minimized == false) {
            minimized = true;
            ifr_s.width = '0';
            btnMe_s.width = '0';
            btnMe_s.opacity = '0';
        } else {
            minimized = false;
            ifr_s.width = '100%';
            btnMe_s.width = '2.5%';
            btnMe_s.opacity = '1';
        }
    }
    function InOpen() {
        In_s.display = 'block';
        Info_s.display = 'block';
    }
    function InClose() {
        In_s.display = 'none';
        Info_s.display = 'none';
    }
    function MeOpen() {
        if (minimized == false) {
            Me_s.display = 'block';
            btnLC_s.display = 'block';
            btnAB_s.display = 'block';
            btnTC_s.display = 'block';
            btnHF_s.display = 'block';
            btnWR_s.display = 'block';
            btnKS_s.display = 'block';
        }
    }
    function MeClose() {
        Me_s.display = 'none';
        btnLC_s.display = 'none';
        btnAB_s.display = 'none';
        btnTC_s.display = 'none';
        btnHF_s.display = 'none';
        btnWR_s.display = 'none';
        btnKS_s.display = 'none';
        }
    function hover(item) {
        if (item == btnX || item == btnMi) {
            if (item == btnX) {
                item.style.backgroundColor = '#F25022';
            } else {
                item.style.backgroundColor = '#0D0D0C';
            }
            btnX_s.opacity = '1';
            btnMi_s.opacity = '1';
            if (minimized == false) {
                btnMe_s.opacity = '1';
            }
            btnX_s.boxShadow = '2px 2px 4px black';
            btnMi_s.boxShadow = '2px 2px 4px black';
            btnMe_s.boxShadow = '2px 2px 4px black';
        } else if (item == btnMe) {
            item.style.backgroundColor = '#0D0D0C';
            if (minimized == false) {
                btnX_s.opacity = '1';
                btnMi_s.opacity = '1';
                btnMe_s.opacity = '1';
                btnX_s.boxShadow = '2px 2px 4px black';
                btnMi_s.boxShadow = '2px 2px 4px black';
                btnMe_s.boxShadow = '2px 2px 4px black';
            }
        } else if (item == btnIn) {
            item.style.backgroundColor = '#0D0D0C';
            btnIn_s.opacity = '1';
            btnIn_s.boxShadow = '2px 2px 4px black';
        } else {
            item.style.backgroundColor = '#181818';
        }
    }
    function unhover(item) {
        if (item == btnX || item == btnMi || item == btnMe || item == btnIn) {
            btnX_s.opacity = '0.5';
            btnMi_s.opacity = '0.5';
            if (minimized == false) {
                btnMe_s.opacity = '0.5';
            }
            btnIn_s.opacity = '0.5';
            btnX_s.boxShadow = 'none';
            btnMi_s.boxShadow = 'none';
            btnMe_s.boxShadow = 'none';
            btnIn_s.boxShadow = 'none';
            item.style.backgroundColor = 'black';
        } else {
                item.style.backgroundColor = '#121212';
        }
    }
    function newTab() {
        if (tabs < 99) {
            const btnTab = document.createElement('button'),
            btnTab_s = btnTab.style,
            Tab = document.createElement('iframe'),
            Tab_s = Tab.style;
            tabs += 1;
            Tab.src = detect(window.location.href);
            function openTab() {
                Tab_s.zIndex = 1001 + tabs;
            }
            Tab_s.width = '100%';
            Tab_s.height = '100%';
            Tab_s.position = 'fixed';
            Tab_s.top = '0';
            Tab_s.left = '0';
            Tab_s.zIndex = 1000 + tabs;
            Tab_s.border = 'none';

            btnTab.textContent = tabs;
            btnTab_s.fontSize = '1.2vw';
            btnTab_s.width = '2.5%'; 
            btnTab_s.height = '4%'; 
            btnTab_s.position = 'fixed';
            btnTab_s.top = '0'; 
            btnTab_s.left = '0'; 
            btnTab_s.zIndex = '2000';
            btnTab_s.margin = '0.25%';
            btnTab_s.marginTop = '44.5%';
            btnTab_s.marginLeft = tabs > 1 ? 2.5 * tabs + '0.25' + '%': '2.75%';
            btnTab_s.color = 'white';
            btnTab_s.backgroundColor = 'black';
            btnTab_s.border = 'none';
            btnTab_s.opacity = '0.5';
            btnTab_s.transitionDuration = '0.1s';

            document.body.appendChild(btnTab);
            btnTab.onclick = function(){openTab()};
            document.body.appendChild(Tab);
        }
    }
    function LC() {
        const link = prompt('🔗 CNVT | Put in a supported link to convert into an embeddable.').toLowerCase();
        ifr.src = check(link);
    }
    function AB() {
        const site = prompt('📋 EMBR | Please put in a link to embed into an about:blank page, leave blank to search.');
        if (site == '') {
            site = detect(window.location.href);
        }
        if (site != null) {
        const page = window.open('about:blank');  
        page.document.write('<iframe src="'+ site +'" style="width:100%;height:100%;border:none"></ifr>');
        }
    }
    function TC() {
        const title = prompt('🔍 CLKR | Please put in the name you want to rename your tab to.');
        if (title != null || title != '') {
            document.title = title;
        }
        const favicon = prompt('🔍 CLKR | Please put in an image link to change the favicon to.');
        if (favicon != null | favicon != '') {
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
        a = window.location.href; 
        for (let i = 1; i <= amount; i++) {
            history.pushState(0, 0, i == amount?a:i.toString()); 
            if (i == amount) {
                done = true;
            }
        }
        if (done == true) {
            alert('🌊 FLDR | History flood successful — "' + a + '" now appears in your history ' + amount + (amount == 1?' time.':' times.') + ' Credit to JonasFlynn for this tool!');
        }
    }
    function WR() {
        ifr.src = 'https://en.wikipedia.org/wiki/Special:Random';
    }
    function KS() {
        const confirm = prompt('🔪 KLLR | Are you sure to want to kill this entire tab? Put in "y" to confirm.');
        if (confirm == 'y') {
            document.body.remove();
        }
    }
    ifr_s.width = '100%'; 
    ifr_s.height = '100%'; 
    ifr_s.position = 'fixed';
    ifr_s.top = '0'; 
    ifr_s.left = '0'; 
    ifr_s.zIndex = '1000'; 
    ifr_s.border = 'none'; 
        
    btnX.textContent = '✕';
    btnX_s.fontSize = '1.2vw';
    btnX_s.width = '2.5%'; 
    btnX_s.height = '4%'; 
    btnX_s.position = 'fixed';
    btnX_s.top = '0'; 
    btnX_s.left = '0'; 
    btnX_s.zIndex = '2000';
    btnX_s.margin = '0.25%';
    btnX_s.color = 'white';
    btnX_s.backgroundColor = 'black';
    btnX_s.border = 'none';
    btnX_s.opacity = '0.5';
    btnX_s.transitionDuration = '0.1s';

    btnMi.textContent = '–';
    btnMi_s.fontSize = '1.5vw';
    btnMi_s.width = '2.5%'; 
    btnMi_s.height = '4%'; 
    btnMi_s.position = 'fixed';
    btnMi_s.top = '0'; 
    btnMi_s.left = '0'; 
    btnMi_s.zIndex = '2000';
    btnMi_s.margin = '0.25%';
    btnMi_s.marginLeft = '2.75%';
    btnMi_s.color = 'white';
    btnMi_s.backgroundColor = 'black';
    btnMi_s.border = 'none';
    btnMi_s.opacity = '0.5';
    btnMi_s.transitionDuration = '0.1s';
        
    btnMe.textContent = '+';
    btnMe_s.fontSize = '1.5vw';
    btnMe_s.width = '2.5%'; 
    btnMe_s.height = '4%'; 
    btnMe_s.position = 'fixed';
    btnMe_s.top = '0';
    btnMe_s.left = '0';
    btnMe_s.zIndex = '2000';
    btnMe_s.margin = '0.25%';
    btnMe_s.marginLeft = '5.25%';
    btnMe_s.color = 'white';
    btnMe_s.backgroundColor = 'black';
    btnMe_s.border = 'none';
    btnMe_s.opacity = '0.5';
    btnMe_s.transitionDuration = '0.1s';
       
    btnIn.textContent = 'i';
    btnIn_s.fontSize = '1.2vw';
    btnIn_s.width = '2.5%'; 
    btnIn_s.height = '4%'; 
    btnIn_s.position = 'fixed';
    btnIn_s.top = '0';
    btnIn_s.left = '0';
    btnIn_s.zIndex = '2000';
    btnIn_s.float = 'right';
    btnIn_s.margin = '0.25%';
    btnIn_s.marginLeft = '97.25%';
    btnIn_s.color = 'white';
    btnIn_s.backgroundColor = 'black';
    btnIn_s.border = 'none';
    btnIn_s.opacity = '0.5';
    btnIn_s.transitionDuration = '0.1s';

    In_s.width = '13.5%'; 
    In_s.height = '36%'; 
    In_s.position = 'fixed';
    In_s.top = '0'; 
    In_s.left = '0'; 
    In_s.zIndex = '2001'; 
    In_s.margin = '2%';
    In_s.marginLeft = '86.3%';
    In_s.border = 'none'; 
    In_s.display = 'none';
    In_s.backgroundColor = 'black';
    In_s.boxShadow = '2px 2px 4px black';

    Info.textContent = 'W.I.P.';
    Info_s.width = '13%'; 
    Info_s.height = '35%'; 
    Info_s.position = 'fixed';
    Info_s.top = '0'; 
    Info_s.left = '0'; 
    Info_s.zIndex = '2002'; 
    Info_s.margin = '2.25%';
    Info_s.marginLeft = '86.55%';
    Info_s.border = 'none'; 
    Info_s.display = 'none';
    Info_s.fontSize = '1vw';
    Info_s.fontFamily = 'sans';
    Info_s.color = 'white';
    Info_s.backgroundColor = 'black';

    Me_s.width = '13.5%'; 
    Me_s.height = '36%'; 
    Me_s.position = 'fixed';
    Me_s.top = '0'; 
    Me_s.left = '0'; 
    Me_s.zIndex = '2001'; 
    Me_s.margin = '2.15%';
    Me_s.marginLeft = '5.25%';
    Me_s.border = 'none'; 
    Me_s.display = 'none';
    Me_s.backgroundColor = 'black';
    Me_s.boxShadow = '2px 2px 4px black';

    btnLC.textContent = 'Link Converter';
    btnLC_s.fontFamily = 'arial';
    btnLC_s.fontSize = '1vw';
    btnLC_s.width = '8%'; 
    btnLC_s.height = '3.8%'; 
    btnLC_s.position = 'fixed';
    btnLC_s.top = '0'; 
    btnLC_s.left = '0'; 
    btnLC_s.zIndex = '2002';
    btnLC_s.margin = '2.7%';
    btnLC_s.marginLeft = '6%';
    btnLC_s.color = 'white';
    btnLC_s.backgroundColor = '#121212';
    btnLC_s.border = 'none';
    btnLC_s.display = 'none';
    btnLC_s.transitionDuration = '0.1s';

    btnAB.textContent = 'About:Blank Embedder';
    btnAB_s.fontFamily = 'arial';
    btnAB_s.fontSize = '1vw';
    btnAB_s.width = '12%'; 
    btnAB_s.height = '3.8%'; 
    btnAB_s.position = 'fixed';
    btnAB_s.top = '0'; 
    btnAB_s.left = '0'; 
    btnAB_s.zIndex = '2002';
    btnAB_s.margin = '5.3%';
    btnAB_s.marginLeft = '6%';
    btnAB_s.color = 'white';
    btnAB_s.backgroundColor = '#121212';
    btnAB_s.border = 'none';
    btnAB_s.display = 'none';
    btnAB_s.transitionDuration = '0.1s';
        
    btnTC.textContent = 'Tab Cloak';
    btnTC_s.fontFamily = 'arial';
    btnTC_s.fontSize = '1vw';
    btnTC_s.width = '6%'; 
    btnTC_s.height = '3.8%'; 
    btnTC_s.position = 'fixed';
    btnTC_s.top = '0'; 
    btnTC_s.left = '0'; 
    btnTC_s.zIndex = '2002';
    btnTC_s.margin = '7.9%';
    btnTC_s.marginLeft = '6%';
    btnTC_s.color = 'white';
    btnTC_s.backgroundColor = '#121212';
    btnTC_s.border = 'none';
    btnTC_s.display = 'none';
    btnTC_s.transitionDuration = '0.1s';
        
    btnHF.textContent = 'History Flooder';
    btnHF.style.fontFamily = 'arial';
    btnHF_s.fontSize = '1vw';
    btnHF_s.width = '8.5%'; 
    btnHF_s.height = '3.8%'; 
    btnHF_s.position = 'fixed';
    btnHF_s.top = '0'; 
    btnHF_s.left = '0'; 
    btnHF_s.zIndex = '2002';
    btnHF_s.margin = '10.5%';
    btnHF_s.marginLeft = '6%';
    btnHF_s.color = 'white';
    btnHF_s.backgroundColor = '#121212';
    btnHF_s.border = 'none';
    btnHF_s.display = 'none';
    btnHF_s.transitionDuration = '0.1s';
        
    btnWR.textContent = 'Random Article';
    btnWR_s.fontFamily = 'arial';
    btnWR_s.fontSize = '1vw';
    btnWR_s.width = '9%'; 
    btnWR_s.height = '3.8%'; 
    btnWR_s.position = 'fixed';
    btnWR_s.top = '0'; 
    btnWR_s.left = '0'; 
    btnWR_s.zIndex = '2002';
    btnWR_s.margin = '13.1%';
    btnWR_s.marginLeft = '6%';
    btnWR_s.color = 'white';
    btnWR_s.backgroundColor = '#121212';
    btnWR_s.border = 'none';
    btnWR_s.display = 'none';
    btnWR_s.transitionDuration = '0.1s';

    btnKS.textContent = 'Kill Site';
    btnKS_s.fontFamily = 'arial';
    btnKS_s.fontSize = '1vw';
    btnKS_s.width = '5%'; 
    btnKS_s.height = '3.8%'; 
    btnKS_s.position = 'fixed';
    btnKS_s.top = '0'; 
    btnKS_s.left = '0'; 
    btnKS_s.zIndex = '2002';
    btnKS_s.margin = '15.7%';
    btnKS_s.marginLeft = '6%';
    btnKS_s.color = 'white';
    btnKS_s.backgroundColor = '#121212';
    btnKS_s.border = 'none';
    btnKS_s.display = 'none';
    btnKS_s.transitionDuration = '0.1s';

    btnTa.textContent = '>';
    btnTa_s.fontSize = '1.5vw';
    btnTa_s.width = '2.5%'; 
    btnTa_s.height = '4%'; 
    btnTa_s.position = 'fixed';
    btnTa_s.top = '0'; 
    btnTa_s.left = '0'; 
    btnTa_s.zIndex = '2001';
    btnTa_s.margin = '0.25%';
    btnTa_s.marginTop = '44.5%';
    btnTa_s.color = 'white';
    btnTa_s.backgroundColor = 'black';
    btnTa_s.border = 'none';
    btnTa_s.opacity = '0.5';
    btnTa_s.transitionDuration = '0.1s';

    document.body.appendChild(ifr);
    ifr.onmouseover = function(){hover(ifr)};
    ifr.onmouseout = function(){unhover(ifr)};

    document.body.appendChild(btnX);
    btnX.onmouseover = function(){hover(btnX)};
    btnX.onmouseout = function(){unhover(btnX)};
    btnX.onclick = function(){X()};

    document.body.appendChild(btnMi);
    btnMi.onmouseover = function(){hover(btnMi)};
    btnMi.onmouseout = function(){unhover(btnMi)};
    btnMi.onclick = function(){Mi()};

    document.body.appendChild(btnMe);
    btnMe.onmouseover = function(){hover(btnMe)};
    btnMe.onmouseout = function(){unhover(btnMe)};
    btnMe.onpointerenter = function(){MeOpen()};
    btnMe.onpointerleave = function(){MeClose()};
        
    document.body.appendChild(btnIn);
    btnIn.onmouseover = function(){hover(btnIn)};
    btnIn.onmouseout = function(){unhover(btnIn)};
    btnIn.onpointerenter = function(){InOpen()};
    btnIn.onpointerleave = function(){InClose()};

    document.body.appendChild(In);
    In.onpointerenter = function(){InOpen()};
    In.onpointerleave = function(){InClose()};

    document.body.appendChild(Info);
    Info.onpointerenter = function(){InOpen()};
    Info.onpointerleave = function(){InClose()};

    document.body.appendChild(Me);
    Me.onpointerenter = function(){MeOpen()};
    Me.onpointerleave = function(){MeClose()};

    document.body.appendChild(btnLC);
    btnLC.onclick = function(){LC()};
    btnLC.onpointerenter = function(){MeOpen()};
    btnLC.onpointerleave = function(){MeClose()};
    btnLC.onmouseover = function(){hover(btnLC)};
    btnLC.onmouseout = function(){unhover(btnLC)};

    document.body.appendChild(btnAB);
    btnAB.onclick = function(){AB()};
    btnAB.onpointerenter = function(){MeOpen()};
    btnAB.onpointerleave = function(){MeClose()};
    btnAB.onmouseover = function(){hover(btnAB)};
    btnAB.onmouseout = function(){unhover(btnAB)};

    document.body.appendChild(btnTC);
    btnTC.onclick = function(){TC()};
    btnTC.onpointerenter = function(){MeOpen()};
    btnTC.onpointerleave = function(){MeClose()};
    btnTC.onmouseover = function(){hover(btnTC)};
    btnTC.onmouseout = function(){unhover(btnTC)};

    document.body.appendChild(btnHF);
    btnHF.onclick = function(){HF()};
    btnHF.onpointerenter = function(){MeOpen()};
    btnHF.onpointerleave = function(){MeClose()};
    btnHF.onmouseover = function(){hover(btnHF)};
    btnHF.onmouseout = function(){unhover(btnHF)};

    document.body.appendChild(btnWR);
    btnWR.onclick = function(){WR()};
    btnWR.onpointerenter = function(){MeOpen()};
    btnWR.onpointerleave = function(){MeClose()};
    btnWR.onmouseover = function(){hover(btnWR)};
    btnWR.onmouseout = function(){unhover(btnWR)};

    document.body.appendChild(btnKS);
    btnKS.onclick = function(){KS()};
    btnKS.onpointerenter = function(){MeOpen()};
    btnKS.onpointerleave = function(){MeClose()};
    btnKS.onmouseover = function(){hover(btnKS)};
    btnKS.onmouseout = function(){unhover(btnKS)};

    document.body.appendChild(btnTa);
    btnTa.onclick = function(){newTab()};
    btnTa.onmouseover = function(){hover(btnTa)};
    btnTa.onmouseout = function(){unhover(btnTa)};

    if (exited != true) {
        window.onbeforeunload = confirmExit;
        function confirmExit() {
            return 0;
        }
    }
})();
