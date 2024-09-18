fetch('components/main-banner.html')
.then(response => response.text())
.then(html => document.getElementById('main-banner').innerHTML = html);




fetch('components/welcome.html')
.then(response => response.text())
.then(html => document.getElementById('welcome').innerHTML = html);



