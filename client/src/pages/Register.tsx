import { useState, type SubmitEventHandler } from 'react'
import { Minus, ArrowRight, Eye, EyeOff} from "lucide-react"
import { Link, useNavigate } from "react-router"
import BackendRes from '../components/BackendRes'

type BackendRes = {
    err: boolean;
    message: string;
}

function Register() {
    const [res, setRes] = useState<BackendRes | undefined >(undefined)
    const[visiblePass, setVisibilePass] = useState(false)

    const navigate = useNavigate()

    const hanlderPassword = () => {
        setVisibilePass(!visiblePass)
    }

    const hanlderForm:SubmitEventHandler = async (e) => {
        e.preventDefault()
        // Tomamos los valores del formulario
        const firstName = e.target.fname.value
        const lastName = e.target.lname.value
        const email = e.target.email.value
        const password = e.target.password.value

        try {
            // Realizamos la peticion al backend
            const res = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( { firstName, lastName, email, password } )
            })

            // Parsemaos la respuesta
            const data = await res.json()

            // Verificamos la respuesta del backend
            if(!res.ok){
                // Cambiamos el estado de la respuesta
                setRes({err: data.error , message: data.message})
                return
            }

            // Si llegamos aqui es pq la respuesta fue 2xx
            navigate('/login')
        } catch (error) {
             if(error instanceof Error){
                setRes({err: true, message: error.message})
            }
        } 
    }

  return (
    <main className="text-[#0F172A]">
        {/* ---- NAVBAR ---- */}
        <header className="flex justify-between items-center px-10 py-4 bg-[#d2cfcdc1]/80 w-full sticky top-0 backdrop-blur-md">
            <h2 className="text-[#4A5568] font-bold text-xl font-headline">LUXE RESERVE</h2>

            <div className="text-[#4A5568] flex gap-6 text-sm">
                <span>SUITS</span>
                <span>HOME</span>
            </div>

            <button className="hidden md:block bg-black text-white p-4 cursor-pointer">
                BOOK NOW
            </button>
        </header>

        {/* ---- SECCION PRINCIPAL ---- */}
        <section className="flex flex-col justify-center items-center bg-[#0F172A] w-full">
            <div className="flex flex-col justify-center items-center bg-white p-14 m-10 gap-6">
                {/* ---- TITULO FORMULARIO ---- */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[#C5A059]">BEGIN YOUR JORUNEY</span>
                    <h1 className="text-2xl text-black italic font-headline md:text-4xl">CREATE ACCOUNT</h1>
                    <Minus size={40} color="#C5A059" />
                </div>
                
                {/* ---- FORMULARIO ----- */}
                <form action="" onSubmit={hanlderForm} className="flex flex-col gap-4 text-[#4A5568]">
                    <div className="flex flex-wrap justify-between gap-6">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="">FIRST NAME</label>
                            <input type="text" id="fname" required placeholder="ELIAS" className="bg-[#d2cfcdc1] border-b py-2 px-4"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="">LAST NAME</label>
                            <input type="text" id="lname" required placeholder="STEARLING" className="bg-[#d2cfcdc1] border-b py-2 px-4"/>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <label htmlFor="">EMAIL ADDRES</label>
                        <input type="text" id='email' required placeholder="e.stearling@gmail.com" className="bg-[#d2cfcdc1]  border-b py-2 px-4"/>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="">PASSWORD</label>
                        <div className='relative flex'>
                            <input type={ visiblePass ? 'text' : 'password'} id='password' required placeholder="*******" className="bg-[#d2cfcdc1] border-b py-2 px-4 pr-14 w-full"/>
                            
                            { visiblePass ? 
                            <EyeOff size={25} onClick={hanlderPassword} className='absolute top-2 right-3 cursor-pointer'/>
                            : 
                            <Eye size={25} onClick={hanlderPassword} className='absolute top-2 right-3 cursor-pointer' />}
                        </div>
                        
                    </div>

                    { res ? <BackendRes response={res}/> : null }

                    <button className="flex text-white bg-[#775A19] px-14 py-4 gap-4 justify-center cursor-pointer mt-6">
                        CREATE ACCOUNT <ArrowRight size={25}/>
                    </button>
                </form>
                <div >
                    <span>ALREDY A MEMBER?</span>
                    <Link to={'/login'} className="text-[#C5A059] hover:text-[#775A19]"> SIGN IN </Link>
                </div>

            </div>
        </section>

        <footer className="flex flex-col md:flex-row justify-between align-middle bg-[#ecebeac1] px-10 py-14 text-sm gap-12">
            <span>2024 LUXE RESERVE. ALL RIGHTS RESERVE</span>
            <div className="flex flex-col  md:flex-row gap-6">
                <span>PRIVACY POLICY</span>
                <span>TERMS OF SERVICE</span>
                <span>ACCESIBILITY</span>
                <span>CONTACT</span>
            </div>
        </footer>
    </main>
  )
}

export default Register
