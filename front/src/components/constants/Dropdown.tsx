import React, { useState, createContext, useContext, Fragment, FC, ReactNode, AnchorHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Transition } from '@headlessui/react';

interface DropDownContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
}

const DropDownContext = createContext<DropDownContextType | undefined>(undefined);

interface DropdownProps {
  children: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  );
};

export const Trigger: FC<{ children: ReactNode }> = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext)!;

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
    </>
  );
};

interface ContentProps {
  align?: 'left' | 'right';
  width?: '48';
  contentClasses?: string;
  children: ReactNode;
}

export const Content: FC<ContentProps> = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
  const { open, setOpen } = useContext(DropDownContext)!;

  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
        >
          <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>{children}</div>
        </div>
      </Transition>
    </>
  );
};

export const DropdownLink: FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = '', children, ...props }) => {
  return (
    <Link
      {...props}
      className={
        'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ' +
        className
      }
    >
      {children}
    </Link>
  );
};

export default Dropdown;
