// extends es para heredar de superclases
class LoginLoader extends HTMLElement {
    constructor(){
        super();
        //This es como self de python
        this.innerHTML = `
            <div id="login-loader" class="center-align" style="margin-top: 20px;">
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <p>Iniciando Sesion, porfavor espere</p>
        </div>`;
    }
};

customElements.define('login-loader', LoginLoader)