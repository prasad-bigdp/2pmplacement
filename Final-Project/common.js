let cartArr = []
document.getElementById("count").textContent = localStorage.getItem('itemsCount')

function addCartFn (prod)
{   
    console.log(prod)
    const c = document.getElementById('count')
    let count = c.textContent;
    count++;
    c.textContent = count;
    localStorage.setItem('itemsCount', count);
    cartArr.push(prod)
    localStorage.setItem('cartItems',JSON.stringify(cartArr))
    console.log(cartArr)
    console.log(localStorage.getItem('cartItems'))
}
