import React from 'react';

import Nav from './Nav';
import { useAuth } from '../lib/useAuth';

const Layout = ({children, noNav = false}) => {
  const { user } = useAuth();
  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-slate-900'>
      {user &&
      <div className='relative w-large text-white p-4 space-y-8'>
        {!noNav && <Nav /> }
        {children}
      </div>
      }
    </div>
  );
};

export default Layout;
