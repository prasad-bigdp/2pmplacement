const names = [
	"Raju",
	"Ramu",
	"Ravi",
	"Ramya",
	"Ravan",
	"Raghava",
	"Raju",
	"Ramu",
	"Ravi",
	"Ramya",
	"Ravan",
	"Raghava",
	"Raju",
	"Ramu",
	"Ravi",
	"Ramya",
	"Ravan",
	"Raghava",
]
const mainDiv = document.getElementById("main")
names.forEach(function (n)
{
    const para = document.createElement('p') //<p></p>
    para.textContent = "Hi " + n;
    mainDiv.appendChild(para)
})