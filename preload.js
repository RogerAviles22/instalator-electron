// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('msg-h4').innerHTML= "Practica <h3> Preprofesional</h3>"; 
    document.getElementById("msg-h3").innerText="Hola <h3> User</h3>";

    /*console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')*/

    function mostrar_mensaje() {
        const button = document.getElementById("btn-msg")
        const texto = document.getElementById("mensaje")

        button.addEventListener( "click", function () {
            console.log(texto.value)
            alert(texto.value)
        });
    }

    mostrar_mensaje();
    
})


