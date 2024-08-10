const mainDiv = document.getElementById('main')
const cartoons = [
	{
		image:
			"https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=90&crop=false",
		name: "Shinchan",
	},
	{
		image:
			"https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg",
		name: "Doremon",
	},
	{
		name: "Chota bheem",
		image: "https://images.news18.com/webstories/2023/10/chota-bheem-0.jpg",
	},
]
cartoons.forEach(function (c)
{
    const divv = document.createElement('div')
    divv.classList.add('cartoon')
    const photo = document.createElement('img')
    photo.src = c.image
    photo.alt=c.name
    const title = document.createElement('h2')
    title.textContent = c.name
    divv.append(photo, title)
    mainDiv.appendChild(divv)
})