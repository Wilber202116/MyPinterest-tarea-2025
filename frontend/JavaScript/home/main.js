import { loadGallery } from "./gallery.js";
import { fethUsers } from "./services/api.js";
import { updatenaNavbaractive } from "./services/utils.js";
import { initUploader } from "./uploader.js";

document.addEventListener("DOMContentLoaded", () => {
    let viewGallery = false;
    
    const userId = parseInt(localStorage.getItem('user_id'));
    if (!userId) return window.location.href = './login.html';

    function loaddata(onlyMine = false){
        const user_id = parseInt(localStorage.getItem("user_id"))
        //console.log(user_id)
        fethUsers()
        .then(users => {
            
            //Obtenemos el elemento html que vamos a rellenar
            const greeting = document.getElementById("user_greeting")
            
            //de todos los usuarios encontramos al que sea el propio
            const user = users.find(u => u.id === user_id)
            
            //si el usuario es el que se logeo entonces que nos de nuestro nombre
            if (onlyMine && user && greeting){
                greeting.textContent = `Fotos de ${user.username}`
                
            }else if (greeting){
                    // llenamos el html con el usuario encontrado 
                    greeting.textContent = `Galeria General`
            }    
            loadGallery(users, onlyMine);
        });
    };

    //Para ver la galeria de los demas
    document.getElementById("btn-general").addEventListener("click", () =>{
        viewGallery = false;
        loaddata(viewGallery)
        updatenaNavbaractive("li-general")
    });

    document.getElementById("btn-mypictures").addEventListener("click", () =>{
        viewGallery = true;
        loaddata(viewGallery);
        updatenaNavbaractive("li-pictures")
    });

    initUploader()
    loaddata(false);
    updatenaNavbaractive('li-general')
});