// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// En el proceso de renderizado (página web).


/*var ipc = require('electron').ipcRenderer;
    var sendButton = document.getElementById('btn-msg');
    var textInput  = document.getElementById('mensaje');

    sendButton.addEventListener('click', function(){
        ipc.once('actionReply', function(event, response){
            processResponse(response);
            alert(response);
            console.log(response)
        })
        ipc.send('invokeAction', textInput.innerText );
    });
*/

/**
 *     
window.addEventListener('DOMContentLoaded', () => {
    function displayMsg() {
        alert('jelou')
        document.getElementById("msg-h3").innerText="Hola";
    }

    displayMsg();
})
*/ 
