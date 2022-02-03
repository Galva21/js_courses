const listt = document.querySelector("#lista");
const elementss = ["item1", "item2", "item3"];

//? Alternativa 1
// let fragmentt = "";
// elementss.forEach((e) => {
//     fragmentt += `
//     <li class="list">
//             <b>nombre: </b> <span class="text-danger"> ${e} </span>
//         </li>
//     `;
// });
// listt.innerHTML = fragmentt;

//? Alternativa 2
const template = document.querySelector("#template-li").content;
const fragment = document.createDocumentFragment();

elementss.forEach((e) => {
    template.querySelector(".list span").textContent = e;
    template.querySelector(".text-danger").textContent = e;
    template.querySelector("span").textContent = e;

    const clon = template.cloneNode(true);
    fragment.appendChild(clon);
});

listt.appendChild(fragment);
