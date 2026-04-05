import { Check } from 'lucide-react'

type modalProps = {
    onclose: () => void;
}

function SecondPart({ onclose }: modalProps) {

    return (
        <div className='flex flex-col gap-6 bg-white items-center p-10 rounded-lg'>
            <Check size={40} color='#50C878' />
            <span className='text-lg'>Tu reserva ha sido agendada correctamente!</span>
            <button className='cursor-pointer bg-green-400 px-8 py-4 rounded-sm hover:bg-green-500' onClick={onclose}>Continuar</button>
        </div>
    )
}

export default SecondPart
