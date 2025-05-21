class ImageGallery extends HTMLElement{
    constructor(){
        super()

        this.innerHTML =`
        <div class="row" id="gallery">
        </div>
    `
    }
}

customElements.define('myimage-gallery', ImageGallery)