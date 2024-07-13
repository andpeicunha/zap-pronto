'use client';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Avatar, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export function NavBar({ className }: { className?: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { data: session, status } = useSession();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section id="navbar-login" className={(cn('flex flex-row items-end justify-end w-screen h-auto p-1'), className)}>
      {status === 'loading' && <Skeleton className="w-[150px] h-11 rounded-3xl mt-6" />}

      {!session && status != 'loading' && (
        <Button size="default" variant="default" className="rounded-3xl mt-6" onClick={() => signIn()}>
          Começar Agora
        </Button>
      )}

      {session && (
        <>
          <Avatar src={session?.user?.image || ''} onClick={handleMenu} />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="">
            <MenuItem onClick={handleClose}>Meu Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Configurações</MenuItem>
            <MenuItem onClick={() => signOut()}>Sair</MenuItem>
          </Menu>
        </>
      )}
    </section>
  );
}
