
/*Hacemos nuestra funcion que comprobara si las contraseñas son iguales o no y nos devolverá un mensaje de alerta*/ 
function comprobarClave(){
     clave1 = document.f1.clave1.value
     clave2 = document.f1.clave2.value
                    
     if (clave1 != clave2) {
            alert("Las passwords deben de coincidir");
            return false;
            } else {
            alert("Todo esta correcto");
            return true; 
            }
    }