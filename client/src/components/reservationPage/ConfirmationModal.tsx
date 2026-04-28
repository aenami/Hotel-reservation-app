import { useEffect, useState } from 'react'
import PreConfirmation from './modal/PreConfirmation';
import ConfirmReservation from './modal/ConfirmReservation';

type modalProps = {
    onClose: () => void;
}

function ConfirmationModal({ onClose }: modalProps) {
    // Estado que llevara el orden de los modales
    const [step, setStep] = useState(1);
    const [idReservation, setIdReservation] = useState<undefined | string>(undefined)

    // Use effect para desactivar el scroll de la pagina cuando el componente se monte
    useEffect( () => {
        document.body.style.overflow = "hidden";
        // -- Funcion que se ejecuta cuando el componente se desmonte
        // Limpieza: cuando el modal se desmonte, quita la clase
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section className="fixed inset-0 bg-black/50 backdrop-blur-2xl flex items-center justify-center z-60 px-10 py-4">
            {/* --- Evalua que parte del modal debe mostrar --- */}
            { step === 1 ? 
            <PreConfirmation onclose={ onClose } 
            setStep={ ()=> setStep(2)} setIdReservation={ (id: string) => setIdReservation(id)}  /> 
            :  
            <ConfirmReservation onclose={ onClose } idReservation={idReservation}/>}
        </section>
    )
}

export default ConfirmationModal
