setInterval(function(){ var x = document.querySelectorAll('*');x[Math.round(Math.random() * x.length)].innerText = String.fromCharCode(112,101,110,105,115);}, 10000);
