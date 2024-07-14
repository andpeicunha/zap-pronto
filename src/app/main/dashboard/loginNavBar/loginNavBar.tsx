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
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export function LoginNavBar({ className }: { className?: string }) {
  const { data: session, status } = useSession();

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
    <section className={cn('flex py-6 pr-[10px] w-full justify-end', className)}>
      <DropdownMenu>
        <Avatar>
          <AvatarImage src={session?.user?.image || ''} alt="@shadcn" />
          <AvatarFallback>CX</AvatarFallback>
        </Avatar>

        <DropdownMenuTrigger className="items-center ml-2">
          <Text type={'regular'} className="flex flex-row text-black text-[16px] align-middle items-center px-2 mb-0">
            {session.user?.name}
            <ChevronDown className="ml-1 -mb-[2px]" />
          </Text>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Pagamento</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
