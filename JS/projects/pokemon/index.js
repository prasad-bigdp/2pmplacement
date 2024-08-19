
const mainDiv = document.getElementById('main');
const inputElement = document.getElementById('inp')
const searchButton = document.getElementById('btn')
const fetchData  = async ()=>
 {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${inputElement.value}`)
//         .then((res) => res.json())
//         .then((data) => displayData(data))
//         .catch((err) => console.log(err))
    try
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputElement.value}`);
    const data = await res.json();
    displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
    
    
}
searchButton.addEventListener('click',fetchData)
const displayData = (pokemon) =>
{
    const pokeImage = document.createElement('img');
    pokeImage.src = pokemon.sprites.front_default;
    pokeImage.alt = pokemon.name;
    const pokeName = document.createElement('h2');
    pokeName.textContent = pokemon.name;
    const height = document.createElement('p');
    height.textContent = "Height: "+pokemon.height;
    const weight = document.createElement('p');
    weight.textContent = "Weight: " + pokemon.weight;
    mainDiv.append(pokeImage,pokeName,height,weight)
}
