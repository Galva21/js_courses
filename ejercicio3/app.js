const lista = document.getElementById("lista");
const elementos = ["a", "v", "s"];

elementos.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    lista.appendChild(li);
});

elementos.forEach((i) => {
    lista.innerHTML += `<li> ${i} </li>`
});
