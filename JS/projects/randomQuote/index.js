const mainDiv = document.getElementById('main')
let myData={}
document.getElementById('btn').addEventListener('click',fetchData)
function fetchData ()
{
    fetch("https://api.quotable.io/random")
        .then(function (res) { return res.json() })
        .then(function (data)
        {
            console.log(data);
            myData = data;
            displayData()
        })
        .catch((err)=>console.log(err))
    
}
fetchData()
function displayData ()
{
    mainDiv.textContent=""
    const content = document.createElement('p');
    content.textContent = myData.content;
    const name = document.createElement('h2');
    name.textContent = myData.author;
    mainDiv.append(content,name)
}