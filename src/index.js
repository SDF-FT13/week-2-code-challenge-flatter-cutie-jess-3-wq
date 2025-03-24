// Your code here

let my_url = "https://flatacutiesbackend.vercel.app/characters"
document.addEventListener('DOMContentLoaded', displaysImage)
function displaysImage(){
   return  fetch(my_url)
           .then(res => res.json())
           .then(data => {
            data.forEach(animal =>{
                const page = document.getElementById('character-bar')
                const spanElement = document.createElement('span')
                spanElement.innerText = animal.name
                page.addEventListener("click",()=>spanElement(animal));

                page.appendChild(spanElement);
                
            }
            )
           })
          
           }

