'use client';
import { Avatar, AvatarFallback, AvatarImage, DropdownMenu } from '@/components/ui';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { Text } from '@/components/ui/title';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export function LoginNavBar({ className }: { className?: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { data: session, status } = useSession();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (status === 'loading') {
    return <Skeleton className="w-[150px] h-11 rounded-3xl mt-6" />;
  }

  if (!session) {
    return (
      <Button size="default" variant="default" className="rounded-3xl mt-6" onClick={() => signIn()}>
        Começar Agora
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <Avatar onClick={handleMenu}>
        <AvatarImage src={session?.user?.image || ''} alt="@shadcn" />
        <AvatarFallback>CX</AvatarFallback>
      </Avatar>

      <DropdownMenuTrigger className="flex flex-row items-center">
        <Text type={'regular'} className="text-black text-[16px] align-middle items-center px-2 mb-0">
          {session.user?.name}
        </Text>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleClose}>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Pagamento</DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
