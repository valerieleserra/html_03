function handleSubmit(event){
    event.preventDefault(); //stops page from reloading
    console.log('Submitted Form')
    const form = document.querySelector("form")
    const newCustomer = {
        firstName:form.elements.firstName.value,
        lastName:form.elements.lastName.value,
        email:form.elements.email.value
    }

    console.log(newCustomer)
    fetch('https://pet-boutique-vl.web.app/customers',{
      method:'POST',
      headers: {
          'Content-Type':'application/json',//Content-Type tells the computer what kind of information you are sending
      },
      body: JSON.stringify(newCustomer),
    })
    
    .then(message => {
        form.innerHTML = `<h3>${message}</h3>`
        getCustomers()
    })
    .catch(err => {
      form.innerHTML = '<h3>Error sending customer</h3>'
    })
}
    // form.innerHTML = '<h3> Thanks </h3>'


function handleNameChange(){
    console.log('Name Changed', event.target.value) //input field / value is what person puts in
}

function getCustomers(){
fetch('https://pet-boutique-vl.web.app/customers')
  .then(response => response.json())
  .then(data => {
      const custDiv = document.getElementById('customers')
      const custArray = data.map(customer => {
        return `<article>
          <h3>${customer.firstName} ${customer.lastName} </h3>
          <p>${customer.email}</p>
        </article>`
        
      })
      custDiv.innerHTML = custArray.join('')
  })
  .catch(err => console.error(err))
}

getCustomers()

// const hero = document.getElementById('hero')
// hero.innerText="This is my new Hero Title"
// const links = document.getElementsByClassName('menu-link')
// links[1].style.color = "white"
// const footer = document.querySelector('footer')
// footer.style.backgroundColor="grey"
