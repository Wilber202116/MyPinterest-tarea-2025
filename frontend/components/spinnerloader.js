class SpinnerLoader extends HTMLElement {
    constructor(){
        super();
        //This es como self de python
        this.innerHTML = `
            <div id="loader" class="center-align" style="margin-top: 50px; display: block;">
                <div class="preloader-wrapper active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-path">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
};

customElements.define('spinner-loader', SpinnerLoader)