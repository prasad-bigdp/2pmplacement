const button= document.getElementById('btn')
function change ()
{
    document.body.classList.toggle('dark')
    if (button.textContent == "Dark Mode")
    {
        button.textContent="light mode"
    }
    else
    {
        button.textContent = "Dark Mode"
    }
}
const passwordInput= document.getElementById('inp')
function inpchange ()
{
    if (passwordInput.type == "password")
    {
        passwordInput.type = "text"
        document.getElementById('icon').classList.replace('fa-eye','fa-eye-slash')
    }
    else
    {
        passwordInput.type = "password";
        document.getElementById("icon").classList.replace("fa-eye-slash", "fa-eye")
    }
}