class FormLogin extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `
        <div class="container">
        <div class="row center-row">
            <div class="col s12 m10 l8 offset-m2 offset-l2">
                <div class="card white z-depth-4">
                    <div class="card-image">
                        <img class="imagena" src="https://i.pinimg.com/736x/3d/c9/47/3dc94757c7daa533dc8b38d756f59a68.jpg" alt="imgaen">
                        <div class="center-align" >
                            <span id="title2" class="card-title blue-text" style="align-content: center; text-align: center;">Iniciar Sesion</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="input-field">
                            <input type="text" id="username" autocomplete="off" autofocus>
                            <label for="username">Nombre de usuario</label>
                        </div>
                        <div class="input-field">
                            <input type="text" id="password" autocomplete="off">
                            <label for="password">contraseña</label>
                        </div>
                    <button id="btnlogin" class="btn waves-effect waves-light">Entrar
                        <i id="icon2" class="medium material-icons">add</i>
                    </button>
                    <a class="center-align" href="#">
                        Primera vez?, registrate aqui 
                        <i id="icon1" class="Small material-icons">arrow_back</i>
                    </a>
                    </div>    
                </div>
            </div>
        </div>
    </div>`;
    }
}

customElements.define('form-login', FormLogin)