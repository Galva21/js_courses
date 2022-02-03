const lista = document.getElementById("lista");
const elementos = ["a", "v", "s"];

//! CAUSAMOS REFLOW
elementos.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    lista.appendChild(li);
});

elementos.forEach((i) => {
    lista.innerHTML += `<li> ${i} </li>`;
});
//! --------------

//? SOLUCION

const fragment = document.createDocumentFragment();
// const fragmentAlternative = new DocumentFragment();

elementos.forEach((e) => {
    const li = document.innerHTML("li");
    li.textContent = e;

    const childNode = fragment.firstChild;

    // fragment.appendChild(li);
    fragment.insertBefore(li, childNode);
});

lista.appendChild(fragment);

//? --------------
