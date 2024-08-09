function change ()
{
    let random_value = Math.round(Math.random() * 10000000).toString(16)
    document.body.style.backgroundColor="#"+random_value
}
let colors = ["red", "voilet", "indigo", "blue", "green", "yellow", "orange", "pink", "black"]
function change2 ()
{
    let random_number = Math.floor(Math.random() * 9)
    document.body.style.backgroundColor= colors[random_number]
}