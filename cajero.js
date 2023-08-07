function ejecutar() {
    // Definir las variables de las cuentas bancarias
    let saldo = 1000;

    // Bucle para realizar acciones
    while (true) {
        let opcion = prompt("¿Qué desea hacer?\n1. Consignar\n2. Retirar\n3. Salir");

        if (opcion === "3") {
            alert("¡Hasta luego!");
            break;
        }

        // Ejecutar la acción correspondiente
        if (opcion === "1") {
            let valor = parseInt(prompt("Digite el valor a consignar"));
            if (isNaN(valor) || valor <= 0) {
                alert("Valor inválido. Ingrese un monto positivo.");
            } else {
                saldo += valor;
                alert("Acción realizada correctamente. Saldo: " + saldo);
            }
        } else if (opcion === "2") {
            let valor = parseInt(prompt("Digite el valor a retirar:"));
            if (isNaN(valor) || valor <= 0) {
                alert("Valor inválido. Ingrese un monto positivo.");
            } else {
                if (valor > saldo) {
                    alert("No se realizó la acción. Saldo: " + saldo);
                } else {
                    saldo -= valor;
                    alert("Acción realizada correctamente. Saldo: " + saldo);
                }
            }
        } else {
            alert("Opción inválida");
        }
    }
}

ejecutar();
