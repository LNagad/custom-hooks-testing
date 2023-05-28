
import toast from 'react-hot-toast';
import { toast as toastify } from 'react-toastify';


export const showNotification = ( type, parameters = {} ) => {

    toast.dismiss();
    toastify.dismiss();

    switch (type) {
    case 'showTodoTotal':
        const { todosPending } = parameters;

        toast(`Tienes ${todosPending} TODOs pendientes`, {
            icon: '⚠️',
            style: {
                fontSize: '18px',
                fontWeight: 'bold'
            }
        });
        return;

    case 'showTodoAdded':
        toastify.success('Todo agregado!');
        return;

    case 'showTodoRemoved':
        toastify.success('Todo eliminado!');
        return;
    
    default:
        return;
    }
};