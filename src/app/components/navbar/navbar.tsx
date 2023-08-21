'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

import Menu from '@mui/material/Menu'
import Style from './navbar.module.scss'
import { Avatar, MenuItem, Skeleton } from '@mui/material'

export function Navbar(props: any) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const { data: session, status } = useSession()

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	if (status === 'loading') {
		return (
			<div className={Style.mainLogin}>
				<Skeleton
					variant='circular'
					animation='wave'
					width={40}
					height={40}
				/>
			</div>
		)
	}

	if (!session) {
		return (
			<div className={Style.mainLogin}>
				<button onClick={() => signIn()}>Fazer Login</button>
			</div>
		)
	}

	return (
		<div className={Style.mainLogout}>
			<Avatar
				src={session?.user?.image || ''}
				onClick={handleMenu}
				className={Style.imageUser}
			/>

			<Menu
				id='menu-appbar'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				className={Style.menuUser}
			>
				<MenuItem onClick={handleClose}>Meu Perfil</MenuItem>
				<MenuItem onClick={handleClose}>Configurações</MenuItem>
				<MenuItem onClick={() => signOut()}>Sair</MenuItem>
			</Menu>
		</div>
	)
}
