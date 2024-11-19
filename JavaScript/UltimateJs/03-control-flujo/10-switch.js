let accion = 'actualizar';

// casos de decisión segun entrada
// el break es obligación siempre
switch(accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardad':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');
    }