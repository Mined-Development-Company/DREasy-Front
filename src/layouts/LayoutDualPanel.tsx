// React
import React from 'react';
// Libs
import { cn } from '../libs';
// Components
import { SideBar } from '../components/ui';
import { Header } from '../components';

interface ILayoutDualPanel {
  children: React.ReactNode;
  className?: string;
}

export const LayoutDualPanel = ({ children, className }: ILayoutDualPanel) => {
  const [show, setShow] = React.useState<boolean>(true);

  return (
    <section
      className={cn(
        'relative w-screen flex justify-center h-screen bg-[#F5F5F5]',
        className,
      )}
    >
      <SideBar headerShowSideBar={show} handleShow={() => setShow(false)} />
      <button
        onClick={() => setShow(false)}
        className={cn(
          show
            ? 'absolute z-40 w-screen h-screen bg-[rgba(0,0,0,0.5)] xl:hidden backdrop-blur-sm'
            : 'hidden',
        )}
      ></button>
      <img
        className="absolute z-0 object-cover w-full"
        src="/background/BaseBackground.png"
        alt="Background"
      />
      <section
        className={cn(
          'relative z-10 transition-all duration-500 max-h-screen h-screen overflow-auto py-5 px-2 max-w-[1550px] w-full m-auto',
          show ? 'desktop:ml-80' : 'ml-0 desktop:px-12',
        )}
      >
        <Header showSiderBar={show} handleShowSideBar={() => setShow(true)} />
        {children}
      </section>
    </section>
  );
};
