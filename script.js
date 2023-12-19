// set page title
document.title = "turn off js";

function noJs(){
    // This will check the size of the viewport
    let width = window.innerWidth;
    let height =  window.innerHeight;
    //check if box exists to prevent cheating
    let noJsBox = document.getElementById('noJsBox');
    if (noJsBox != null) {
        noJsBox.style.width = width + 'px';
        noJsBox.style.height = height + 'px';
    }else{
        // create big box covering whole viewport
        let noJsBox = document.createElement('div');
        noJsBox.style.zIndex = 9999;
        noJsBox.setAttribute('id', 'noJsBox');
        noJsBox.style.position = 'fixed';
        noJsBox.style.top = 0;
        noJsBox.style.left = 0;
        noJsBox.style.width = width + 'px';
        noJsBox.style.height = height + 'px';
        noJsBox.style.backgroundColor = 'black';
        noJsBox.style.color = 'white';
        noJsBox.style.display = 'flex';
        noJsBox.style.alignItems = 'center';
        noJsBox.style.justifyContent = 'center';
        noJsBox.style.flexFlow = 'column nowrap';
        noJsBox.innerHTML = '<img src="https://http.cat/images/501.jpg" alt="501 not implemented"><br><h1>kindly disable js to access this page</h1>';
        document.body.appendChild(noJsBox);
        noJsBox = document.getElementById('noJsBox');
    }
}
var intervalId = setInterval(noJs, 100);