import React from 'react';
// React-router-dom
import { NavLink } from 'react-router-dom';
// Libs
import { cn } from '../../libs';
// React icons
import { FiLogOut } from 'react-icons/fi';
import { AiTwotoneBank, AiOutlineFunnelPlot } from 'react-icons/ai';
import { RiBankCardFill } from 'react-icons/ri';
import { FaRegChartBar } from 'react-icons/fa';

interface ICardProps {
  title: string;
  to: string;
  icon: React.ReactNode;
}

interface ISideBar {
  headerShowSideBar: boolean;
  handleShow: () => void;
}

const Card = ({ title, to, icon }: ICardProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center justify-start gap-3 px-6 py-5 font-semibold rounded-md text-[#294333] outline-[#F4F4F4] hover:outline hover:outline-1 hover: hover:shadow-lg',
          isActive &&
            'text-green-500 shadow-lg outline outline-1 outline-[#F4F4F4]',
        )
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};

export const SideBar = ({ handleShow, headerShowSideBar }: ISideBar) => {
  const [show, setShow] = React.useState<boolean>(true);

  function handleClick() {
    setShow(false);
    handleShow();
  }

  return (
    <aside
      className={cn(
        'transition-all duration-500 fixed inset-y-0 w-[309px] h-screen left-0 p-4 rounded-xl z-50',
        !show && !headerShowSideBar && '-left-80',
      )}
    >
      <button
        onClick={handleClick}
        className="absolute p-3 bg-white border border-green-300 rounded-full shadow-custon -right-1 top-10"
      >
        <FiLogOut className="rotate-180 text-grayish-green" size={20} />
      </button>
      <div className="w-full h-full px-4 pt-2 space-y-6 bg-white shadow-2xl rounded-3xl">
        <h1 className="p-2 m-auto text-5xl font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-[#23FF95] to-[#0FB27C]">
          DREasy
        </h1>
        <Card title="Invoices" to="/invoices" icon={<RiBankCardFill />} />
        <Card title="Receives" to="/Receives" icon={<AiTwotoneBank />} />
        <Card
          title="Cash flow"
          to="/cash-flow"
          icon={<AiOutlineFunnelPlot />}
        />
        <Card title="DRE" to="/dre" icon={<FaRegChartBar />} />
      </div>
    </aside>
  );
};
