import { CircleQuestionMark } from 'lucide-react'

type modalProps = {
    onclose: () => void;
    setStep: () => void;
}

function FirstPart({ onclose, setStep }:modalProps) {

    const handlerConfirmation = () => {
        setStep()
    }

    return (
        <div className='flex flex-col gap-6 bg-white items-center p-10 rounded-lg'>
            <CircleQuestionMark size={40} />
            <span className='text-lg'>Estas seguro de que deseas agendar esta reserva?</span>
            <div className='flex justify-between w-full'>
                <button onClick={handlerConfirmation}
                    className='cursor-pointer bg-green-500 px-8 py-4 rounded-sm hover:bg-green-600'>Confirmar</button>
                <button className='cursor-pointer bg-red-500 px-8 py-4 rounded-sm hover:bg-red-600' onClick={onclose}>Cancelar</button>
            </div>
        </div>
    )
}

export default FirstPart
