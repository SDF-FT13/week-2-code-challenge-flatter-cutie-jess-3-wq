// Your code here

document.addEventListener('DOMContentLoaded', () => {
    let my_url = "https://flatacutiesbackend.vercel.app/characters";
    const animalName = document.getElementById('name');
    const animalImage = document.getElementById('image');
    const characterBar = document.getElementById('character-bar');
    const voteCount = document.getElementById('vote-count');
    const voteForm = document.getElementById('vote-form');
    const voteInput = document.getElementById('votes');
    const resetButton = document.getElementById('reset-btn');
    
    let selectedAnimal = null;

    fetch(my_url)
        .then(res => res.json())
        .then(animals => {
            animals.forEach(animal => {
                const spanElement = document.createElement('span');
                spanElement.innerText = animal.name;
                spanElement.style.cursor = 'pointer';

                spanElement.addEventListener("click", () => {
                    showCharacterDetails(animal);
                    selectedAnimal = animal; 
                });

                characterBar.appendChild(spanElement);
            });

          
            if (animals.length > 0) {
                selectedAnimal = animals[0]; 
                showCharacterDetails(selectedAnimal);
            }
        })
        .catch(error => console.log(error));
    
    
    function showCharacterDetails(animal) {
        animalName.innerText = animal.name;
        animalImage.src = animal.Image;
        animalImage.alt = animal.name;
        voteCount.innerText = animal.vote;
        animalImage.style.display = 'block';
    }

   
    voteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
      
        if (!selectedAnimal) {
            return; 
        }

        const votesToAdd = parseInt(voteInput.value, 10) || 0; 
        selectedAnimal.vote += votesToAdd; 

        
        voteCount.textContent = selectedAnimal.vote;
        
      
        voteInput.value = "";
    });

    
    resetButton.addEventListener("click", () => {
        if (selectedAnimal) {
            selectedAnimal.vote = 200;  
            voteCount.textContent = "0";  
        }
    });
});