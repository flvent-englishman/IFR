function ifr() {
 const site = window.location.href;
 if (site.startsWith("https://google.com")) {
   var iframe = document.createElement("iframe");
   const src = prompt("Link:");
   if (src.startswith("http")) {
     iframe.src = src;
     } else {
       iframe.src = "https://" + src;
       }
       iframe.style.width = "100%";
       iframe.style.height = "100%";
       iframe.style.position = "fixed";
       frame.style.top = "0";
       iframe.style.left = "0";
       iframe.style.zIndex = "9999";
       iframe.style.border = "none";
       document.body.appendChild(iframe);
 } else {
   alert("⛔ ERR | Go to 'https://google.com/' to use.");
 }
}
