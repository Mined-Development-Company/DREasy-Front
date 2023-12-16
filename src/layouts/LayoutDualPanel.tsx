import React from 'react';
import { SideBar } from '../components/ui/SideBar';
import { cn } from '../libs/cn';
import { Header } from '../components';

interface ILayoutDualPanel {
  children: React.ReactNode;
  className?: string;
}

export const LayoutDualPanel = ({ children, className }: ILayoutDualPanel) => {
  const [show, setShow] = React.useState<boolean>(true);

  return (
    <section
      className={cn('relative w-screen h-screen bg-gray-800', className)}
    >
      <SideBar headerShowSideBar={show} handleShow={() => setShow(false)} />
      <button
        onClick={() => setShow(false)}
        className={cn(
          'absolute z-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] xl:hidden backdrop-blur-sm',
          !show ? 'hidden' : '',
        )}
      ></button>
      <div
        className={cn(
          'transition-all duration-500 max-w-full max-h-screen h-screen overflow-auto py-5',
          show ? 'lg:ml-80' : 'lg:ml-0',
        )}
      >
        <Header showSiderBar={show} handleShowSideBar={() => setShow(true)} />
        {children}
      </div>
    </section>
  );
};
