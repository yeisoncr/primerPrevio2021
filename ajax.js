document.querySelector('#btn-deportes').addEventListener('click', traerDatos2);

function traerDatos2() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'deporte.html', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('#cambios').innerHTML = this.responseText;
        }
    }
}


document.querySelector('#btn-deportes').addEventListener('click', traerDatos);

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'deportes.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                res.innerHTML += `
                <tr>
                <td> ${item.id}</td>
                <td> ${item.titulo}</td>
                <td> ${item.categoria}</td>
                </tr>
                `

            }
        }
    }
}





document.querySelector('#btn-tecnologia').addEventListener('click', traerDatos3);

function traerDatos3() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'tecnologias.html', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('#cambios').innerHTML = this.responseText;
        }
    }
}


document.querySelector('#btn-tecnologia').addEventListener('click', traerDatos4);

function traerDatos4() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'tecnologia.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                res.innerHTML += `
                <tr>
                <td> ${item.id}</td>
                <td> ${item.titulo}</td>
                <td> ${item.categoria}</td>
                </tr>
                `

            }
        }
    }
}