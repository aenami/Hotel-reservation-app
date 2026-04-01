import { Minus, ArrowRight} from "lucide-react"
import { Link } from "react-router"
function Register() {
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
                <form action="" className="flex flex-col gap-4 text-[#4A5568]">
                    <div className="flex flex-wrap justify-between gap-6">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="">FIRST NAME</label>
                            <input type="text" placeholder="ELIAS" className="bg-[#d2cfcdc1] border-b py-2 px-4"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label htmlFor="">LAST NAME</label>
                            <input type="text" placeholder="STEARLING" className="bg-[#d2cfcdc1] border-b py-2 px-4"/>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <label htmlFor="">EMAIL ADDRES</label>
                        <input type="text" placeholder="e.stearling@gmail.com" className="bg-[#d2cfcdc1]  border-b py-2 px-4"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="">PASSWORD</label>
                        <input type="text" placeholder="*******" className="bg-[#d2cfcdc1] border-b py-2 px-4"/>
                    </div>

                    <button className="flex text-white bg-[#775A19] px-14 py-4 gap-4 justify-center mt-6 cursor-pointer">
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
