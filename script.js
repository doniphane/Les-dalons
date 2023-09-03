
const cardContainer = document.querySelector(".container");
let data ;

const utilisateur = async () => {
    const url = "https://randomuser.me/api/?results=20";
    const result = await fetch(url);
    data = await result.json();
    let random;
    let gender = data.results[0].gender;

   switch (gender) {
            case "female":
                backgroundClass = "femelle";
                break;
            case "male":
                backgroundClass = "male";
                break;
            default:
                break;
        }

    for (i=1; i <=20; i++) {
        cardContainer.innerHTML += `<div class="card">
                <h2>${data.results[i].name.first}</h2>
                <p>${data.results[i].email}</p>
                <p>${data.results[i].registered.date}</p>
            </div>
    
        </div>`; 
    }

};
utilisateur ();