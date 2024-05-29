function gotohome(){
    window.location="index.html"
    localStorage.setItem("cartItems" ,JSON.stringify(arr));
}

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');
const totalAmount=document.querySelector(".total")

function renderItems (){
    let totalAmount=0;
    totalAmount.innerHTML="";
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h1>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>
            <h1>Price: ${cartItems[i].price}</h1>
            <p>${"Total Amount" +" "+ cartItems[i].price * cartItems[i].quantity}</p>
            <div class="d-flex ">
            <button class=" m-2 mb-lg-0 bg-success rounded-md px-2 py-1 text-white mt-4" onclick="increaseQuantity(${i})">+</button>
            <button class=" m-2 mb-lg-0 bg-danger border-dark rounded-md px-2 py-1 text-white mt-4" onclick="decreaseQuantity(${i})">-</button> <br/>
            </div>
            <div class="d-flex">
            <p class="m-3 mt-lg-0">${cartItems[i].quantity}</p>
            </div>
    <button  class="bg-danger rounded-md px-2 py-1 text-white mt-4" onclick="deleteItem(${i})">Delete</button>
            </div>
            `
        }
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderItems()



function increaseQuantity(index){
div.innerHTML="";
cartItems[index].quantity += 1;
renderItems()
}

function decreaseQuantity(index){
div.innerHTML="";
cartItems[index].quantity -= 1;
renderItems()
if(cartItems === 0){
    div.innerHTML="";
    cartItems.splice(index,1);
    renderItems()
}
}

function deleteItem(index){
    div.innerHTML="";
    cartItems.splice(index,1);
    renderItems()
}

window.onbeforeunload = function() {
    localStorage.setItem('cartItem' , JSON.stringify(cartItems));
};