class Navbar extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `
        <nav class="blue">
            <div class="nav-wrapper container">
                <a href="#" class="brand-logo" style="position: static;">MyGalleryBonsai</a>
            <ul class="right">
                <li id="li-general"><a id="btn-general">Galeria general</a></li>
                <li id="li-pictures"><a id="btn-mypictures">Mi galeria</a></li>
                <li id="li-logout">
                    <a id="btn-logout" class="blue-text text-lighten-5">Cerrar sesion</a>
                </li>
            </ul>
            </div>
        </nav>
        `
    }
}

customElements.define('my-ownnavbar', Navbar)