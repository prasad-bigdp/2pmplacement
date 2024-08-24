let cartArr = []
document.getElementById("count").textContent= localStorage.getItem('itemsCount')
function addCartFn (prod)
{
    console.log(prod)
    const c = document.getElementById('count')
    let count = c.textContent;
    count++;
    c.textContent = count;
    localStorage.setItem('itemsCount', count);
    localStorage.setItem('cartItems', [...cartArr, JSON.stringify(prod)])
    cartArr.push(JSON.stringify(prod))
    console.log(localStorage.getItem('cartItems'))
}