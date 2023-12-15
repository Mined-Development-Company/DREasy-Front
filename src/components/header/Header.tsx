import { Link } from "react-router-dom";
import { IoSettingsSharp, IoNotifications } from 'react-icons/io5'

export const Header = () => {
  return (
    <nav className="flex items-center text-grayish-green gap-2 sm:gap-5 w-fit">
      <div className="flex items-center">
        <span className="w-7 h-7 sm:w-9 sm:h-9 mr-2 text-xs sm:text-sm border-2 rounded-full flex items-center justify-center font-medium bg-red-300 bg-white border-green-500 select-none">
          US
        </span>

        <span className="text-sm sm:text-xl">Usuário</span>
      </div>

      <Link aria-label="Configurações" className="p-1" to="/settings">
        <IoSettingsSharp />
      </Link>

      <button aria-label="Notificações" className="p-1" type="button">
        <IoNotifications />
      </button>
    </nav>
  );
};
