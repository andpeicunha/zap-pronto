'use client'
import { Button } from '@/components/ui'
import { House, MessageSquareText, Users } from 'lucide-react'
import Image from 'next/image'

interface PropsSidebar {
  onClick?: () => void
}

export const MenuSideBar = ({ onClick }: PropsSidebar) => {
  return (
    <section id="menu-sidebar">
      <div className="w-full items-center">
        <Image
          src="/images/logotipo.png"
          width={197}
          height={27}
          alt="logotipo"
          data-testid="logotipo"
          className="px-5 pt-6 pb-14 w-auto"
        />
      </div>
      <div className="space-y-9">
        <Button variant={'icon-menu'} size={'icon'} className=" w-full">
          <House size={28} />
          Início
        </Button>
        <Button variant={'icon-menu'} size={'icon'} className=" w-full">
          <Users />
          Contatos
        </Button>
        <Button variant={'icon-menu'} size={'icon'} className=" w-full">
          <MessageSquareText />
          Mensagens
        </Button>
      </div>
    </section>
  )
}
