javascript:(
  function() {
    const site = window.location.href; 
    var iframe = document.createElement('iframe'); 
    const src = prompt('Input a link or leave blank to go to Google.'); 
    if (src === null || src === '') {
      iframe.src = 'https://google.com/';
    } else if (src.startswith('http')) {
      iframe.src = src;
    } else {
      iframe.src = 'https://' + src;
    } 
    iframe.style.width = '100%'; 
    iframe.style.height = '100%'; 
    iframe.style.position = 'fixed';
    iframe.style.top = '0'; 
    iframe.style.left = '0'; 
    iframe.style.zIndex = '9999'; 
    iframe.style.border = 'none'; 
    document.body.appendChild(iframe);
    }
)();
