// Importamos modulos externos de javascript
// from tkinter import messagebox

import { fethComments, fethImages } from "./services/api.js";

export async function loadGallery(users, onlyMine = false){
    const user_id = parseInt(localStorage.getItem("user_id"));
    const container = document.getElementById("gallery");
    const loader = document.getElementById("loader");

    loader.style.display = 'block';

    container.innerHTML = '';
    const images = await fethImages();
    
    images.forEach(img => {
        //pregunta si el usuario que subio la foto es el mismo que esta logueado
        const isMine = parseInt(img.user_id) === user_id;

        //es para saber que la persona logueada sea la misma de la foto
        if (onlyMine && !isMine) return;
        if (!onlyMine && isMine) return;


        //Se encuentra a la persona que subio la foto
        const uploader = users.find(u => u.id == img.user_id);
        const uploadername = uploader ? (uploader.id === user_id ? 'Tú' : uploader.username) : 'John Doe' //uploader.username;
        
        const commentHtml = img.comments.map(c => {
            //encontramos a la persona que comento en los comentarios
            const comment = users.find(u => u.id === c.user_id);
            //Pregunta si el comentario es de la persona o no
            const commenterName = comment ? (comment.id === user_id ? 'Tú' : comment.username) : 'John Doe';
            return `<p><strong>${commenterName}</strong>: ${c.text}</p>`
        }).join('');

        const card = document.createElement('div');
        card.className = 'col s12 m6 l4';
        card.innerHTML = `
            <div class='card hoverable z-depth-3'>
                <div class='card-image'>
                    <img class='materialboxed' src='http://127.0.0.1:5000/static/uploads/${img.filename}'>
                </div>
                <div id="identify" class='card-content'>
                    <span class='card-title'>Subido por <strong>${uploadername}</strong></span>
                    ${commentHtml || '<p>Sin comentarios aun</p>'}
                    <div class="comment-section row">
                        <div class="input-field" style="display:flex; align-items: center; border: 1px solid #ccc; border-radius: 30px; padding: 0 10px;">
                        <input type="text" placeholder="Escribre un comentario" id='comment-${img.id}' style="border: none; box-shadow: one; margin:0; flex: 1;">
                        <a  data-imageid="${img.id}" class="btn-flat waves-effect waves-grey" style="min-width: auto; padding: 0;">
                            <i class="material-icons">send</i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>    
        `
        container.appendChild(card)
        M.Materialbox.init(document.querySelectorAll('.materialboxed'))
        loader.style.display = 'none';
    });

    //Evento para agregar comentario
    container.querySelectorAll(".comment-section a").forEach(btn =>{
        btn.addEventListener("click", () => {
            const imageId = btn.getAttribute("data-imageid")
            const input = document.getElementById(`comment-${imageId}`);
            const text = input.value.trim();
            if (!text) return;
            fethComments(imageId, user_id, text).then(console.log);
        });
    })

};