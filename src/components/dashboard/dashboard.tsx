'use client';
import { Drawer, Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { NavBar } from '@/app/main/navBar/navBar';
import { Sidebar } from '../sidebar/sidebar';
import Client from './client/page';
import S from './dashboard.module.scss';

export const Dashboard = () => {
  // const { data: session } = useSession({ required: true });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={S.container} onClick={open ? handleDrawerClose : () => {}}>
        <Tooltip title="Abrir Menu" arrow placement="right">
          <Image
            src="/images/icon-logo.png"
            width={93}
            height={57}
            alt="Abrir Menu"
            className={`${S.iconOpenMenu} ${open ? S.hidden : ''}`}
            onClick={handleDrawerOpen}
          />
        </Tooltip>

        <div className={S.header}>
          <NavBar />
        </div>
        <div className={S.main}>
          <Client />
          {/* <ImportSheetJs /> */}
        </div>
        <div className={open ? `${S.open}` : `${S.open} ${S.hidden}`}></div>
      </div>

      <Drawer variant="persistent" anchor="left" open={open} onClose={handleDrawerClose} className={S.drawerSidebar}>
        <Sidebar onClick={handleDrawerClose} />
      </Drawer>
    </>
  );
};
