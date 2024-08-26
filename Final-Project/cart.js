let cartArray = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartArray)
let mainDiv = document.getElementById("cartData")
function displayData(data)
{
    mainDiv.textContent=""
    data.forEach((c,i) =>
    {
        const div = document.createElement('div');
        div.classList.add('cartItem')
        const img = document.createElement('img');
        img.src = c.thumbnail;
        img.alt= c.title
        const title = document.createElement('h2');
        title.text = c.title;
        const price = document.createElement('p');
        price.textContent = "$" + c.price;
        const removeButton = document.createElement('button')
        removeButton.textContent = "❎"
        removeButton.addEventListener('click',()=>deleteData(i))
        div.append(img, title, price, removeButton);
        mainDiv.appendChild(div)
    })
}
function updatePrice ()
{
    let newPrice = cartArray.reduce((prev, curr) => prev + curr.price, 0);
    document.getElementById("total").textContent= newPrice.toFixed(2)
}
updatePrice();
displayData(cartArray)
function deleteData (i)
{
    cartArray.splice(i, 1);
    displayData(cartArray);
    updatePrice();
}