/* Ingreso de empleados de la empresa*/
let ingreso = prompt ("Ingresar nombre del usuario o deletrear salir");
while (ingreso !="salir") {
    switch (ingreso) {
    case "Martin":
        alert ("Hola Martin");
        break;

        case "Maria":
            alert ("Hola Maria");
            break;

            case "Mario":
                alert ("Hola Mario");
                break;
    default:
        alert ("¿Usted es un usario nuevo? Contacte al administrador");
        break;
}
ingreso = prompt ("Ingresar nombre del usuario o deletrear salir");
} 