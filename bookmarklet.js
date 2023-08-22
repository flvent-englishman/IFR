javascript:(
    function() {
        let qtd = false;
        let mzd = false;
        const ifr = document.createElement('iframe'); 
        const btnX = document.createElement('button');
        const btnMi = document.createElement('button');
        const btnMe = document.createElement('button');
        const Me = document.createElement('div');
        const btnNC = document.createElement('button');
        const btnAB = document.createElement('button');
        const btnTC = document.createElement('button');
        const btnHF = document.createElement('button');
        const btnWR = document.createElement('button');
        const input = prompt('🖥️ IFR | Input link or leave blank to search.'); 
        if (input == '') {
            ifr.src = 'https://www.google.com/';
        } else if (input.startsWith('https://www.youtube.com/watch?v=' || 'https://youtu.be/')) {
            ifr.src = checkYt(input);
        } else if (input.startsWith('http')) {
            ifr.src = input;
        } else {
            ifr.src = 'https://' + input;
        }
        function checkYt(oldYt) {
            if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
                let yt = input.split('=');
                let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
                return newYt;
            } else if (oldYt.startsWith('https://youtu.be/')) {
                let yt = input.split('/');
                let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
                return newYt;
            } else {
                return oldYt;
            }
        }
        function hover(item) {
            if (item == btnX || item == btnMi || item == btnMe || item == Me) {
                btnX.style.opacity = '1';
                btnMi.style.opacity = '1';
                if (mzd == false) {
                    btnMe.style.opacity = '1';
                }
                btnX.style.boxShadow = '2px 2px 4px black';
                btnMi.style.boxShadow = '2px 2px 4px black';
                btnMe.style.boxShadow = '2px 2px 4px black';
                if (item == btnX) {
                    item.style.backgroundColor = '#F25022';
                } else {
                    item.style.backgroundColor = '#0D0D0C';
                }  
            } else {
                item.style.backgroundColor = '#181818';
            }
        }
        function unhover(item) {
            if (item == btnX || item == btnMi || item == btnMe || item == Me) {
                btnX.style.opacity = '0.5';
                btnMi.style.opacity = '0.5';
                if (mzd == false) {
                    btnMe.style.opacity = '0.5';
                }
                btnX.style.boxShadow = 'none';
                btnMi.style.boxShadow = 'none';
                btnMe.style.boxShadow = 'none';
                item.style.backgroundColor = 'black';
            } else {
                item.style.backgroundColor = '#121212';
            }
        }
        function X() {
            ifr.remove();
            btnX.remove();
            btnMi.remove();
            btnMe.remove();
            Me.remove();
            btnNC.remove();
            btnAB.remove();
            btnHF.remove();
            btnWR.remove();
            qtd = true;
        }
        function Mi() {
            if (mzd == false) {
                mzd = true;
                ifr.style.width = '0%';
                btnMe.style.width = '0%';
                btnMe.style.opacity = '0';
            } else {
                mzd = false;
                ifr.style.width = '100%';
                btnMe.style.width = '2.5%';
                btnMe.style.opacity = '1';
            }
        }
        function MeOpen() {
            Me.style.display = 'block';
            btnNC.style.display = 'block';
            btnAB.style.display = 'block';
            btnTC.style.display = 'block';
            btnHF.style.display = 'block';
            btnWR.style.display = 'block';
        }
        function MeClose() {
            Me.style.display = 'none';
            btnNC.style.display = 'none';
            btnAB.style.display = 'none';
            btnTC.style.display = 'none';
            btnHF.style.display = 'none';
            btnWR.style.display = 'none';
        }

        function NC() {
            let oldYt = prompt('🎧 YTNC | Input a YouTube video link to turn into YouTube NC.');
            if (oldYt.startsWith('https://www.youtube.com/watch?v=')) {
            let yt = input.split('=');
            let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
            return newYt;
            } else if (oldYt.startsWith('https://youtu.be/')) {
            let yt = input.split('/');
            let newYt = 'https://www.youtube-nocookie.com/embed/' + yt[3];
            return newYt;
            } else {
                if (oldYt != null || oldYt != '') {
                    alert('⛔ ERROR | Did you put a valid YouTube link?');
                }
            }
        }
        function AB() {
            let site = prompt('What website do you want to embed into an about:blank page? Leave empty to search.');
            if (site == '') {
                site = 'https://www.google.com';
            }
            if (site != null) {
            const page = window.open('about:blank');  
            page.document.write('<iframe src="'+ site +'" style="width:100%;height:100%;border:none"></ifr>');
            }
        }
        function TC() {
            let title = prompt('What do you want to rename the tab to?');
            if (title != null || title != '') {
                document.title = title;
            }
            let favicon = prompt('Please add the image address of what you want to set the favicon to.');
            if (favicon != null | favicon != '') {
                let link = document.querySelector('link[rel~="icon"]');
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = favicon;
            }
        }
        function HF() {
            let amount = prompt('How much do you want to flood by?'); 
            done = false; 
            x = window.location.href; 
            for (var i = 1; i <= amount; i++) {
                history.pushState(0, 0, i == amount?x:i.toString()); 
                if (i == amount) {
                    done = true
                }
            }
            if (done == true) {
                alert('History flood successful! "' + window.location.href + '" now appears in your history ' + amount + (amount == 1?' time.':' times. Credit to JonasFlynn for this tool.'))
            }
        }
        function WR() {
            ifr.src = 'https://en.wikipedia.org/wiki/Special:Random';
        }
        const ifr_s = ifr.style;
        ifr_s.width = '100%'; 
        ifr_s.height = '100%'; 
        ifr_s.position = 'fixed';
        ifr_s.top = '0'; 
        ifr_s.left = '0'; 
        ifr_s.zIndex = '1000'; 
        ifr_s.border = 'none'; 
        const btnX_s = btnX.style;
        btnX.textContent = '✕';
        btnX_s.fontSize = '1.2vw';
        btnX_s.width = '2.5%'; 
        btnX_s.height = '4%'; 
        btnX_s.position = 'fixed';
        btnX_s.top = '0'; 
        btnX_s.left = '0'; 
        btnX_s.zIndex = '1001';
        btnX_s.margin = '0.25%';
        btnX_s.color = 'white';
        btnX_s.backgroundColor = 'black';
        btnX_s.border = 'none';
        btnX_s.opacity = '0.5';
        btnX_s.transitionDuration = '0.1s';
        const btnMi_s = btnMi.style;
        btnMi.textContent = '–';
        btnMi_s.fontSize = '1.5vw';
        btnMi_s.width = '2.5%'; 
        btnMi_s.height = '4%'; 
        btnMi_s.position = 'fixed';
        btnMi_s.top = '0'; 
        btnMi_s.left = '0'; 
        btnMi_s.zIndex = '1001';
        btnMi_s.margin = '0.25%';
        btnMi_s.marginLeft = '2.75%';
        btnMi_s.color = 'white';
        btnMi_s.backgroundColor = 'black';
        btnMi_s.border = 'none';
        btnMi_s.opacity = '0.5';
        btnMi_s.transitionDuration = '0.1s';
        const btnMe_s = btnMe.style;
        btnMe.textContent = '+';
        btnMe_s.fontSize = '1.5vw';
        btnMe_s.width = '2.5%'; 
        btnMe_s.height = '4%'; 
        btnMe_s.position = 'fixed';
        btnMe_s.top = '0';
        btnMe_s.left = '0';
        btnMe_s.zIndex = '1001';
        btnMe_s.margin = '0.25%';
        btnMe_s.marginLeft = '5.25%';
        btnMe_s.color = 'white';
        btnMe_s.backgroundColor = 'black';
        btnMe_s.border = 'none';
        btnMe_s.opacity = '0.5';
        btnMe_s.transitionDuration = '0.1s';
        const Me_s = Me.style;
        Me_s.width = '13.5%'; 
        Me_s.height = '30%'; 
        Me_s.position = 'fixed';
        Me_s.top = '0'; 
        Me_s.left = '0'; 
        Me_s.zIndex = '1002'; 
        Me_s.margin = '2.1%';
        Me_s.marginLeft = '5.2%';
        Me_s.border = 'none'; 
        Me_s.display = 'none';
        Me_s.backgroundColor = 'black';
        Me_s.transitionDuration = '0.1s';
        const btnNC_s = btnNC.style;
        btnNC.textContent = 'YouTube NC';
        btnNC_s.fontFamily = 'arial';
        btnNC_s.fontSize = '1vw';
        btnNC_s.width = '7%'; 
        btnNC_s.height = '3.8%'; 
        btnNC_s.position = 'fixed';
        btnNC_s.top = '0'; 
        btnNC_s.left = '0'; 
        btnNC_s.zIndex = '1003';
        btnNC_s.margin = '2.8%';
        btnNC_s.marginLeft = '6%';
        btnNC_s.color = 'white';
        btnNC_s.backgroundColor = '#121212';
        btnNC_s.border = 'none';
        btnNC_s.display = 'none';
        btnNC_s.transitionDuration = '0.1s';
        const btnAB_s = btnAB.style;
        btnAB.textContent = 'About:Blank Embedder';
        btnAB_s.fontFamily = 'arial';
        btnAB_s.fontSize = '1vw';
        btnAB_s.width = '12%'; 
        btnAB_s.height = '3.8%'; 
        btnAB_s.position = 'fixed';
        btnAB_s.top = '0'; 
        btnAB_s.left = '0'; 
        btnAB_s.zIndex = '1003';
        btnAB_s.margin = '5.4%';
        btnAB_s.marginLeft = '6%';
        btnAB_s.color = 'white';
        btnAB_s.backgroundColor = '#121212';
        btnAB_s.border = 'none';
        btnAB_s.display = 'none';
        btnAB.style.transitionDuration = '0.1s';
        const btnTC_s = btnTC.style;
        btnTC.textContent = 'Tab Cloak';
        btnTC_s.fontFamily = 'arial';
        btnTC_s.fontSize = '1vw';
        btnTC_s.width = '6%'; 
        btnTC_s.height = '3.8%'; 
        btnTC_s.position = 'fixed';
        btnTC_s.top = '0'; 
        btnTC_s.left = '0'; 
        btnTC_s.zIndex = '1003';
        btnTC_s.margin = '8%';
        btnTC_s.marginLeft = '6%';
        btnTC_s.color = 'white';
        btnTC_s.backgroundColor = '#121212';
        btnTC_s.border = 'none';
        btnTC_s.display = 'none';
        btnTC_s.transitionDuration = '0.1s';
        const btnHF_s = btnHF.style;
        btnHF.textContent = 'History Flooder';
        btnHF.style.fontFamily = 'arial';
        btnHF_s.fontSize = '1vw';
        btnHF_s.width = '8.5%'; 
        btnHF_s.height = '3.8%'; 
        btnHF_s.position = 'fixed';
        btnHF_s.top = '0'; 
        btnHF_s.left = '0'; 
        btnHF_s.zIndex = '1003';
        btnHF_s.margin = '10.6%';
        btnHF_s.marginLeft = '6%';
        btnHF_s.color = 'white';
        btnHF_s.backgroundColor = '#121212';
        btnHF_s.border = 'none';
        btnHF_s.display = 'none';
        btnHF_s.transitionDuration = '0.1s';
        const btnWR_s = btnWR.style;
        btnWR.textContent = 'Random Article';
        btnWR_s.fontFamily = 'arial';
        btnWR_s.fontSize = '1vw';
        btnWR_s.width = '9%'; 
        btnWR_s.height = '3.8%'; 
        btnWR_s.position = 'fixed';
        btnWR_s.top = '0'; 
        btnWR_s.left = '0'; 
        btnWR_s.zIndex = '1003';
        btnWR_s.margin = '13.2%';
        btnWR_s.marginLeft = '6%';
        btnWR_s.color = 'white';
        btnWR_s.backgroundColor = '#121212';
        btnWR_s.border = 'none';
        btnWR_s.display = 'none';
        btnWR_s.transitionDuration = '0.1s';
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
        document.body.appendChild(Me);
        Me.onpointerenter = function(){MeOpen()};
        Me.onpointerleave = function(){MeClose()};
        btnNC.onmouseover = function(){hover(Me)};
        btnNC.onmouseout = function(){unhover(Me)};
        document.body.appendChild(btnNC);
        btnNC.onclick = function(){NC()};
        btnNC.onpointerenter = function(){MeOpen()};
        btnNC.onpointerleave = function(){MeClose()};
        btnNC.onmouseover = function(){hover(btnNC)};
        btnNC.onmouseout = function(){unhover(btnNC)};
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
        if (qtd != true) {
            window.onbeforeunload = confirmExit;
            function confirmExit() {
                return 0;
            }
        }
    }
)();
