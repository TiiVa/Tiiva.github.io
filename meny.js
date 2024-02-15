

class Food{
    constructor(name, price, imageUrl){ 
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        
    }
}

const cart = [];

const foods = [
    new Food("Margherita", 95, "../images/margherita.jpg"), 
    new Food("Vesuvio", 100, "../images/vesuvio.jpg"), 
    new Food("Kebab", 125, "../images/kebab.jpg"), 
    new Food("Falaffel", 130, "../images/falaffel2.jpg"), 
    new Food("Lasagne", 120, "../images/lasagne2.jpg")];

    
    const foodsList = document.querySelector("#foods");
    const total = document.querySelector("#total");
    const cartItems = document.querySelector("#cartItems");
    const checkOutBtn = document.querySelector("#checkOut");
    

    let totalCount = 0;

    function displayFoods(){
        for (const food of foods) {
    
    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const buyBtn = document.createElement("button");
    const removeBtn =  document.createElement("button");
    const img = document.createElement("img");
    img.alt = `picture of ${food.name}`;
    


applyStyles(li, card, cardBody, cardTitle, buyBtn, removeBtn, img);

buyBtn.innerText = "Köp";
buyBtn.onclick = () => {
    shopButtonClick(buyBtn, removeBtn, "buyBtn", food);
    
    totalCount += food.price;
    total.innerText = `Totalt: ${totalCount}`;
    console.log(totalCount);
};
removeBtn.innerText = "Ta bort";
removeBtn.onclick = () => {
    const index = cart.indexOf(food);
    shopButtonClick(buyBtn, removeBtn, "removeBtn", food, index);
    
    totalCount -= food.price;
    total.innerText = `Totalt: ${totalCount}`;
    console.log(totalCount);
};

cardTitle.innerText = `${food.name} / ${food.price} kr`;
img.src = food.imageUrl;

cardBody.appendChild(cardTitle);
cardBody.appendChild(img);
cardBody.appendChild(buyBtn);
cardBody.appendChild(removeBtn);

card.appendChild(cardBody);
li.appendChild(card);

foodsList.appendChild(li);

}
}

displayFoods();

function applyStyles(li, card, cardBody, cardTitle, buyBtn, removeBtn, img)
{
    li.classList.add("list-group-item");
    card.classList.add("card", "bg-light", "container");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    buyBtn.classList.add("btn", "btn-success", "mx-1", "col");
    removeBtn.classList.add("btn", "btn-danger", "mx-1", "col");
    img.classList.add("rounded");
}

function shopButtonClick(buyBtn, removeBtn, buychoice, food, index){
    if(buychoice == "buyBtn"){
        
        cart.push(food);
        console.log(cart);
        updateCartDisplay();
        
    }
    else if(buychoice == "removeBtn"){
        
        cart.splice(index, 1);
        console.log(cart);
        updateCartDisplay();
    }
}

function displayCartItems(){
    
    const cartListContainer = document.createElement("div");
    cartListContainer.classList.add("list-group");

    for (const item of cart) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("list-group-item");

        const itemName = document.createElement("span");
        itemName.innerText = item.name + " ";

        const itemPrice = document.createElement("span");
        itemPrice.innerText = item.price + "kr";

        cartItem.appendChild(itemName);
        cartItem.appendChild(itemPrice);

        cartListContainer.appendChild(cartItem);
    }
    cartItems.innerText = "";
    cartItems.appendChild(cartListContainer);
}
function updateCartDisplay(){
    displayCartItems();
}

checkOutBtn.onclick = ()=>{
    cart.splice(0);
    console.log(cart);
    displayCartItems();
    totalCount = 0;
    total.innerText = `Totalt: ${totalCount}`;
    alert("Tack för din beställning! Vi levererar inom 30 minuter");
};




