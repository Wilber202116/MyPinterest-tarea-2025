import { fethUploadImage } from "./services/api.js";

export function initUploader(){
    const imageinput = document.getElementById("image-input");
    const favUpload = document.getElementById("fab-upload");
    let viewGallery = true;

    favUpload.addEventListener("click", () => {
        imageinput.click(); // cambia al evento change
    });

    imageinput.addEventListener("change", ()=>{
        const file = imageinput.files[0];
        if (!file) return;

        const userId = localStorage.getItem("user_id")
        fethUploadImage(file, userId).then(data => {
            console.log('imagen subida', data);
        });
        
    });
}