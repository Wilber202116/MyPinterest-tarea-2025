//Export: hace que pueda llamarse desde otros archivos
//Async: hace a la funcion asincrona

const URL = 'http://127.0.0.1:5000/api';
export async function fethUsers() {
    const res = await fetch(`${URL}/users`)
    return res.json();
};

export async function fethImages() {
    const res = await fetch(`${URL}/images`);
    return res.json();
};

export async function fethUploadImage(file, userId) {
    const formData = new FormData();
   
    formData.append('image', file);
    formData.append('user_id', userId);

    const res = await fetch(`${URL}/upload`, {
            method: "POST",
            body: formData
        });
    return res.json();
};

export async function fethComments(imageid, userid, text) {
    const res = await fetch(`${URL}/comments/${imageid}`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            user_id: userid,
            comment: text
        })
    });
    return res.json()
};