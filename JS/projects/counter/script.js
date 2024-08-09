let paraValue = document.getElementById('count')
let c = 0;
function incr ()
{
    c++;
    paraValue.textContent = c;
}
function decr ()
{
    if (c <= 0)
    {
        alert("It should not be less than zero")
    }
    else
    {
        c--;
		paraValue.textContent = c
    }

}
function reset() {
	c=0
	paraValue.textContent = c
}