let itemsArray = [];
let contador = 0;

function setLocalArray() {
  localStorage.setItem("items", JSON.stringify(itemsArray));
}
function getLocalArray() {
  itemsArray = JSON.parse(localStorage.getItem("items"));
  return itemsArray;
}
function setContador() {
  localStorage.setItem("contador", contador);
}
function getContador() {
  return localStorage.getItem("contador");
}
function limpiar() {
  localStorage.clear();
  itemsArray = [];
  contador = 0;
  document.getElementById("item").value = "";
  document.querySelectorAll(".listItem").forEach((el) => el.remove()); //stackoverflow sape
}


function inicializar() {
  if (localStorage.getItem("contador") != null) {
    contador = getContador();
    itemsArray = getLocalArray();
  }
  listarItems();
}
inicializar();

function listarItems() {
  htmlToAppend = "";
  for (let i = 0; i < itemsArray.length; i++) {
    let element = itemsArray[i].name;
    htmlToAppend += `<li class="listItem">` + element + `</li>`;
    document.getElementById("contenedor").innerHTML = htmlToAppend;
  }
}
function addItems() {
    let item = document.getElementById("item").value;

  contador++;
  
if (item != "") {
  let objItem = {
    id: contador,
    name: item,
  };
  itemsArray.push(objItem);
  setLocalArray();
  setContador();
  listarItems();
  document.getElementById("item").value="";
}
}



