// taking value pid from URL

const params = new URLSearchParams(window.location.search)
const pid = params.get('pid');
console.log(pid)

const fetchData = (pid) =>
{
    fetch(`https://dummyjson.com/product/${pid}`)
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err))
}
fetchData(pid)
const leftDiv = document.getElementById('left');
const rightDiv = document.getElementById('right');
const displayData = (data) =>
{
    const proImage = document.createElement('img');
    proImage.src = data.thumbnail;
    proImage.alt = data.title;
    leftDiv.appendChild(proImage);
    const proTitle = document.createElement('h2');
    proTitle.textContent = data.title;
    const proPrice = document.createElement('p');
    proPrice.textContent = "Price : $" + data.price
    const AddCartButton = document.createElement('button');
    AddCartButton.textContent = "Add to cart";
    AddCartButton.addEventListener("click", () => addCartFn(data))
    rightDiv.append(proTitle,proPrice,AddCartButton)
}