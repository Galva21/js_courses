const a = document.querySelector('.a') // clase
const b = document.querySelector('#a') // id
const c = document.querySelector('h3') // etiqueta 
const d = document.querySelectorAll('h3') // conjunto de etiquetas
const e = document.querySelectorAll('#h3-a') // conjunto de etiquetas con clase
c.textContent = 'b' // cambiamos el texto
c.innerHTML = '<b> texto en negrita </b>' // podemos agregar etiquetas
c.classList.add('newLabel', 'abc') // agregar clases a una etiqueta
