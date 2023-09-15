let form = document.querySelector('form')
let main=document.querySelector('#main')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
     let name=e.target.name.value
     let email=e.target.email.value
     let date=e.target.date.value
     let title=e.target.title.value
     let blog=e.target.blog.value

    
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    userDetails.push(
        {
name,
email,
date,
title,
blog
        }
    )

    localStorage.setItem('details', JSON.stringify(userDetails))
    display()
    e.target.reset()
})


let display=()=>{
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    console.log(userDetails)
    let finalData=""
    userDetails.forEach((x,i)=>{
        
        finalData+=`  
       
        <div class="items">
        <span class="cross" onclick="del(${i})">&times;</span>
        
        <h3> Blog's Title:
        ${x.title}
        </h3>

        <p>${x.date}</p>
       
        <h3> Author: ${x.name}</h3>
        

        <h3>Blog:
        </h3>
        <p>${x.blog}</p>

        <h6> Author's Email:${x.email}</h6>
        
       

        <button class="btns" onclick="edit(${i})">Edit</button>
        </div>

        `
    })
    main.innerHTML=finalData

}
display()

function del(index){
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    userDetails.splice(index,1)
    localStorage.setItem('details',JSON.stringify(userDetails))
    display()
}

let edit=(index)=>{
    let userDetails = JSON.parse(localStorage.getItem('details')) ?? []
    let update=prompt('Enter editted value here')
    userDetails[index].blog=update
    console.log(userDetails[index].blog)
    localStorage.setItem('details',JSON.stringify(userDetails))
    display()
}
console.log("ali")
