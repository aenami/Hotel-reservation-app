import { tokenManager } from "../utils/tokenManager";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

export function Header() {
  const user = tokenManager.getUser()
  const navigate = useNavigate()

  const hanlderLogOut = ()=> {
    //1. Limpiar la sesion
    tokenManager.clearSession()

    //2. Redirigir al login
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg flex justify-between items-center px-8 h-20">
      <div className="flex items-center gap-6">
        <div className="font-serif italic text-2xl tracking-tighter leading-none">
          LUXE RESERVE
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-12">
        <NavLink to={'/welcome'}
        className={ (data) => data.isActive ? "text-secondary font-bold text-[10px] uppercase tracking-[0.2em] ": "font-bold text-[10px] uppercase tracking-[0.2em] hover:text-secondary transition-colors"}>
          Reservation
        </NavLink>


        <NavLink to={'/bookingHistory'}
        className={ (data) => data.isActive ? "text-secondary font-bold text-[10px] uppercase tracking-[0.2em] ": "font-bold text-[10px] uppercase tracking-[0.2em] hover:text-secondary transition-colors"}>
          Reservation History
        </NavLink>

      </nav>

      <div className="flex items-center gap-8">
        <span className="hidden sm:inline font-serif text-lg tracking-tight text-on-surface-variant">
          Welcome, {user.nombre}
        </span>
        <button onClick={hanlderLogOut}
        className="text-on-surface-variant/60 hover:text-secondary transition-colors text-[10px] uppercase font-bold cursor-pointer">
          Log Out
        </button>
      </div>
    </header>
  );
}
