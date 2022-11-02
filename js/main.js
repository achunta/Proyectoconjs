const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let decuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById ("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidadTickets"); 
let categoria = document.getElementById("categoriaSelect");


function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++){
        x[i].classList.remove('is-invalid');
    }
}

function ResetTotalAPagar(){
    quitarClaseError();
    totalPago.innerHTML = ""; 
}
function TotalAPagar (){
    /*quitarClaseError();*/
    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        alert("Por favor, escribí tu nombre.");
        nombre.focus();
        return;
        
    }
    else if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        alert("Por favor, escribí tu nombre.");
        apellido.focus();
        return;
        
    }
    else if (mail.value === ""){
        mail.classList.add("is-invalid");
        alert("Por favor, escribí tu nombre.");
        mail.focus();
        return;
        
    }

    /*const emailValido = mail=> {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }*/

    if (!emailValido(mail.value)){
        alert("Por favor, escriba un correo electrónico válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    if ((cantidadTickets.value == 0)|| (isNaN(cantidadTickets))) {
        alert("Por favor, ingrese correctamente cantidad de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    if(categoria.value == "") {
        alert("Por favor, sellecione una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    let totalValorTickets = (cantidadTickets.value) * totalValorTickets

    if (categoria.value ==0){
        totalValorTickets = totalValorTickets ;
    }

    if (categoria.value ==1){
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);

    }

    if (categoria.value ==2){
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);

    }
    if (categoria.value ==3){
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }   
     
    totalPago.innerHTML = totalValorTickets; 
} 

btnResumen.addEventListener('click', TotalAPagar);


btnBorrar.addEventListener('click', ResetTotalAPagar) ;