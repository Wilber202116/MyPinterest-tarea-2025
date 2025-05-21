class ImageUploader extends HTMLElement{
    constructor(){
        super()

        this.innerHTML =`
        <div class="fixed-action-btn">
            <a id="fab-upload" class="btn-floating btn-large blue">
                <i class="material-icons">add_a_photo</i>
            </a>
        </div>

        <!-- input para recibir el archivo -->
        <input type="file" id="image-input" accept="image/*" style="display: none;">
    `
    }
}

customElements.define('myimage-uploader', ImageUploader)