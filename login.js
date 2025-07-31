const loginForm = document.getElementById('sign-in-form');
const emailInpu = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');


loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = emailInput.value;       
    const password = passwordInput.value; 

    const CORREO_PERMITIDO = "tienda@gmail.com";
    const CONTRASENA_PERMITIDA = "123456"; 

    
    if (email === CORREO_PERMITIDO && password === CONTRASENA_PERMITIDA) {

        window.location.href = "menu.html";

    } else {
        
        console.error("Intento de inicio de sesión fallido."); 
        alert("Usuario o contraseña incorrectos.");
    }
});
