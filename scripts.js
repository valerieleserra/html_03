function handleSubmit(event){
    event.preventDefault() //stops page from reloading
    console.log('Submitted Form')
    const form = document.querySelector('form')
    form.innerHTML = '<h3> Thanks </h3>'
}
function handleNameChange(){
    console.log('Name Changed', event.target.value) //input field / value is what person puts in
}
const hero = document.getElementById('hero')
hero.innerText="This is my new Hero Title"
const links = document.getElementsByClassName('menu-link')
links[1].style.color = "white"
const footer = document.querySelector('footer')
footer.style.backgroundColor="grey"
