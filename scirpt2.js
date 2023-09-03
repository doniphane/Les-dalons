const cardContainer = document.querySelector(".container");
let data ;

const utilisateur = async () => {
    const url = "https://randomuser.me/api/?results=20";
    const result = await fetch(url);
    data = await result.json();

    for (i = 0; i < 20; i++) {
        let backgroundClass;
        switch (data.results[i].gender) {
            case "female":
                backgroundClass = "femelle";
                break;
            case "male":
                backgroundClass = "male";
                break;
            default:
                break;
        }

        cardContainer.innerHTML += `<div class="card ${backgroundClass}">
            <div class="img-contain">
                <img src="${data.results[i].picture.large}" alt="${data.results[i].name.first}">
            </div>
            <div class="info">
                <h2>${data.results[i].name.first}</h2>
                <p>${data.results[i].email}</p>
                <p>${data.results[i].registered.date}</p>
            </div>
        </div>`;
    }

};
utilisateur ();
