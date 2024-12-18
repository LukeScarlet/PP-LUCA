document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = "./login/index.html";
    }
});

async function getPosts() {
    const images = 'http://localhost:3005/uploads/';

    const response1 = await fetch('http://localhost:3005/api/dados', {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },

    });

    let content1 = await response1.json();

    if (content1.success) {
        let postHtml = document.getElementById("posts");

        content1.data.map(post => {
            let img = post.file
                 ? " <img src=" + images + post.file + " alt='img' height='500' width='500'/> "
                 : ""

            postHtml.innerHTML += "<div class='post'> " +
                " <h2>" + post.titulo + "</h2>" +
                " <p>" + post.mensagem + "</p> " +
                img +
                " </div> ";
        });

    } else {

        alert("get erro")
    }
}

getPosts();

async function postar(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('titulo', document.getElementById("titulo").value)
    formData.append('mensagem', document.getElementById("mensagem").value)
    formData.append('file', document.getElementById("file").files[0])
    
    console.log(formData.get("mensagem"));

    const response = await fetch('http://localhost:3005/api/store/post', {
        method: "POST",
        body: formData
    });

    let content = await response.json();

    if (content.success) {
        getPosts();
    } else {
        alert("Não")
    }
}

document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});
document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
});
