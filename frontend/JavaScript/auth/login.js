// Cuando cargue el documento que se ejecute lo que esta dentro
window.addEventListener("load", () =>{
    let btnlogin = document.getElementById("btnlogin")
    //console.log(btnlogin);

    btnlogin.addEventListener("click", () => {
        let varusername = document.getElementById("username").value;
        let vatpassword = document.getElementById("password").value;
        const loader = document.getElementById("login-loader")

        loader.style.display = 'block'
        //console.log(username, password)
        setTimeout(() => {
                // union entre JS y PYTHON
            fetch('http://127.0.0.1:5000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: varusername,
                    password: vatpassword
                })
            })
            .then(res => res.json())// respuesta en json
            .then(data => {
                console.log(data)
                loader.style.display = 'none'
                if (data.user_id){
                    localStorage.setItem('user_id', data.user_id)
                    M.toast({
                        html: data.mensaje,
                        classes: 'green'
                    })
                    location.href = 'index.html';
                } else{
                    M.toast({
                        html: data.Error,
                        classes: "red"
                    });
                }
            }) // repuesta en json pero es un error
            
            .catch(err => {
                loader.style.display = 'none'
                M.toast({
                    html: "Error de conexion",
                    classes: "red"
                });
            });
        }, 2000);
        
    });
});
    