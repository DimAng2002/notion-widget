function addText(){
    var items = document.querySelectorAll(".to_do");

    items.forEach(item => {
        var h1Element = item.querySelector('h1');
        item.addEventListener('click', (i) => {
            i.currentTarget.style.backgroundColor = "red";
            h1Element.textContent = "Clicked";
        });
    });
}

function addNew(){
    const parentElement = document.getElementById('container');
    parentElement.insertAdjacentHTML('beforeend', "<div class = 'to_do'><h1></0h1></div>");
    addText();

}

window.addEventListener('load', () => {
  addText();
});