const list = document.querySelector("#lista");
const elements = ["item1", "item2", "item3"];
const fragmento = document.createDocumentFragment();

elements.forEach((e) => {
    const li = document.createElement("li");
    li.classList.add("list");

    const b = document.createElement("b");
    b.textContent = "Nombre: ";

    const span = document.createElement("span");
    span.classList("text-danger");
    span.textContent = e;

    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
});

list.appendChild(fragment);
