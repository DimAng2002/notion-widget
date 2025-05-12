function addText(){
    var items = document.querySelectorAll(".to_do");
    
    items.forEach(item => {
        var h1Element = item.querySelector('h1');
        if(!item.hasAttribute('data-has-listener')) {
            item.addEventListener('click', (i) => {
                if (h1Element.textContent != "Clicked"){
                    i.currentTarget.style.backgroundColor = "red";
                    h1Element.textContent = "Clicked";
                } else {
                    i.currentTarget.style.backgroundColor = "aquamarine";
                    h1Element.textContent = "";
                }
            });
            item.setAttribute('data-has-listener', 'true');
        }
    });
}


function addNew(){
    const parentElement = document.getElementById('container');
    parentElement.insertAdjacentHTML('beforeend', "<div class = 'to_do'><h1></h1></div>");
    addText();

}

function resetListings(){
    var items = document.querySelectorAll(".to_do");
    items.forEach(item=>{
        item.remove();
    });
}

window.addEventListener('load', () => {
  addText();
});