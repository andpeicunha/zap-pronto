'use client';
import React from 'react';

import { LoginNavBar } from '@/app/main/navBar/loginNavBar';
import { useSession } from 'next-auth/react';
import { MenuSideBar } from '../sidebar/sidebar';
import { Separator } from '../ui';

export const Dashboard = () => {
  const { data: session } = useSession({ required: true });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section id="dash" className="flex h-screen">
      <div className="bg-[#D1DFEB] w-[250px] h-auto">
        <MenuSideBar onClick={handleDrawerClose} />
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex py-6 pr-[20px] w-full justify-end">
          <LoginNavBar />
        </div>
        <Separator className="w-auto ml-[5%]" />
        <div className="">
          {/* <Client /> */}
          {/* <ImportSheetJs /> */}
        </div>
      </div>
    </section>
  );
};
