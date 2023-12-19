// React-router-dom
import { Link } from 'react-router-dom';
// React-icons
import { IoSettingsSharp, IoNotifications } from 'react-icons/io5';
// Libs
import { cn } from '../../libs';

interface IHeader {
  showSiderBar: boolean;
  handleShowSideBar: () => void;
}

export const Header = ({ showSiderBar, handleShowSideBar }: IHeader) => {
  return (
    <header
      className={cn(
        'flex items-center',
        showSiderBar ? 'justify-end' : 'justify-between',
      )}
    >
      <button
        onClick={handleShowSideBar}
        className={cn('space-y-1', showSiderBar && 'hidden')}
      >
        <div className="w-8 h-1 rounded-full bg-grayish-green"></div>
        <div className="w-8 h-1 rounded-full bg-grayish-green"></div>
        <div className="w-8 h-1 rounded-full bg-grayish-green"></div>
      </button>
      <nav className="flex items-center gap-2 text-grayish-green tablet:gap-5 w-fit">
        <div className="flex items-center">
          <span className="flex items-center justify-center mr-2 text-xs font-medium bg-white border-2 border-green-500 rounded-full select-none w-7 h-7 tablet:w-9 tablet:h-9 tablet:text-sm">
            US
          </span>

          <span className="text-sm tablet:text-xl">Usuário</span>
        </div>

        <Link aria-label="Configurações" className="p-1" to="/settings">
          <IoSettingsSharp />
        </Link>

        <button aria-label="Notificações" className="p-1" type="button">
          <IoNotifications />
        </button>
      </nav>
    </header>
  );
};
