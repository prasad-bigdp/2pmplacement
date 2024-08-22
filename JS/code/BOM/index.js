console.log(this)
console.log(window.location)
window.navigator
    .geolocation.getCurrentPosition((val) => console.log(val.coords))
    document.getElementById('btn').addEventListener('click',getVideo)
function getVideo ()
{
    window.navigator.mediaDevices.getUserMedia({ video: true })
        .then((s) =>
        {
            console.log(s)
            const v = document.getElementById("vd")
                v.srcObject=s
        })
   

}

localStorage.setItem('name', 'prasad');
console.log(localStorage.getItem('name'))
console.log(localStorage.removeItem('name'))
localStorage.clear()
