class Greeting extends HTMLElement{
    constructor(){
        super()

        this.innerHTML = `
        <h4 id="user_greeting"></h4>
        `
    }
}

customElements.define('user-greeting', Greeting)