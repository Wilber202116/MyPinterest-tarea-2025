function loadGallery(users){
    const user_id = parseInt(localStorage.getItem("user_id"))
    const container = document.getElementById("gallery")

    container.innerHTML = '';
    fetch('http://127.0.0.1:5000/api/images')
    .then(res => res.json())
    .then(images => {
        images.forEach(img => {
            //Se encuentra a la persona que subio la foto
            const uploader = users.find(u => u.id == img.user_id);
            const uploadername = uploader ? (uploader.id === user_id ? 'Tú' : uploader.username) : 'John Doe' //uploader.username;
            

            const card = document.createElement('div');
            card.className = 'col s12 m6 l4';
            card.innerHTML = `
                <div class='card hoverable z-depth-3'>
                    <div class='card-image'>
                        <img class='materialboxed' src='http://127.0.0.1:5000/static/uploads/${img.filename}'>
                    </div>
                    <div id="identify" class='card-content'>
                        <span class='card-title'>Subido por <strong>${uploadername}</strong></span>
                    </div>
                </div>    
            `
            container.appendChild(card)
            M.Materialbox.init(document.querySelectorAll('.materialboxed'))
        });
        
    });
    
}

function loaddata(){
    const user_id = parseInt(localStorage.getItem("user_id"))
    //console.log(user_id)
    fetch('http://127.0.0.1:5000/api/users')
    .then(res => res.json())
    .then(users => {
        
        //Obtenemos el elemento html que vamos a rellenar
        const greeting = document.getElementById("user_greeting")

        // de todos los usuarios encontramos al que seael propio
        const user = users.find(u => u.id === user_id)
        // llenamos el html con el usuario encontrado 
        greeting.textContent = `Bienvenido ${user.username}`
        loadGallery(users);
    });
    
}

document.addEventListener("DOMContentLoaded", () => {
    const imageinput = document.getElementById("image-input");
    const favUpload = document.getElementById("fab-upload");

    favUpload.addEventListener("click", () => {
        imageinput.click();
    });
    loaddata();
    
});