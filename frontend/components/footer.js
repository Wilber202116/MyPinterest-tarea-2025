class MyFooter extends HTMLElement{
    constructor(){
        super()

        this.innerHTML =`
        <footer class="page-footer blue lighten-3">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class='white-text'>MyMixGallery</h5>
                        <p class="grey-text text-lighten-4">Hecho con Flask y Materialize</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Enlaces</h5>
                        <ul>
                            <li>
                                <a class="grey-text text-lighten-4" href='index.html'>
                                    Galeria
                                </a>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
            <div class="footer-copyright">
                    <div class="container"
                        <p>@ 2025 Wilber202116</p>
                    </div>
                </div>
        </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)