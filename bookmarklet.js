javascript:(
  function() {
    const iframe = document.createElement('iframe'); 
    const input = prompt('Input a link or leave blank to go to Google. YouTube links will be automatically converted into YouTube NC.'); 
    if (input === '') {
      iframe.src = 'https://google.com/';
    } else if (input.startsWith('https://www.youtube.com')) {
      const yt = input.split('=');
      const newyt = 'https://www.youtube-nocookie.com/embed/' + yt[1];
      window.open(newyt);
    } else if (input.startsWith('https://youtu.be')) {
      const yt = input.split('/');
      const newyt = 'https://www.youtube-nocookie.com/embed/' + yt[2];
      window.open(newyt);
    } else if (input.startsWith('http')) {
      iframe.src = input;
    } else {
      iframe.src = 'https://' + input;
    } 
    iframe.style.width = '100%'; 
    iframe.style.height = '100%'; 
    iframe.style.position = 'fixed';
    iframe.style.top = '0'; 
    iframe.style.left = '0'; 
    iframe.style.zIndex = '9999'; 
    iframe.style.border = 'none'; 
    document.body.appendChild(iframe);

    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "?";
    }
  }
)();
