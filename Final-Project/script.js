const mainDiv = document.getElementById("productsList");
const fetchData = async () =>
{
    try
    {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData();
const displayData = (data) =>
{
    data.products.forEach((p) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('product')
        const proImage = document.createElement('img');
        proImage.src = p.thumbnail;
        proImage.alt = p.title;
        const proLink = document.createElement('a');
        proLink.href = `./product.html?pid=${p.id}`
        proLink.target='_blank'
        const proTitle = document.createElement('h2');
        proTitle.textContent = p.title
        proLink.append(proTitle)
        const proPrice = document.createElement('p');
        proPrice.textContent= "Price: $"+p.price
        const addCartButton = document.createElement('button')
        addCartButton.textContent = "ADD CART"
        addCartButton.addEventListener('click',()=>addCartFn(p))
        proDiv.append(proImage, proLink, proPrice, addCartButton);
        mainDiv.appendChild(proDiv)
    })
}