'use client'
import { LoginNavBar } from '@/app/main/dashboard/loginTopBar/'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Separator } from '../../../components/ui'
import { MenuSideBar } from '../sidebar'
import RegisterPanel from './registerPanel'

export const Dashboard = () => {
  const { data: session } = useSession({ required: true })
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <section id="dash" className="flex h-screen">
      <div className="bg-[#D1DFEB] rounded-r-xl w-[250px] h-auto">
        <MenuSideBar onClick={handleDrawerClose} />
      </div>
      <div className="flex flex-col w-full h-full">
        <LoginNavBar />
        <Separator className="w-auto ml-10" />
        <div className="">
          <RegisterPanel />
        </div>
      </div>
    </section>
  )
}
