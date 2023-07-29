import React from 'react'

import RegisterClients from './register/page'
import { Box, Grid } from '@mui/material'

function Client() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={8}
				>
					<div>xs=8</div>
				</Grid>
				<Grid
					item
					xs={4}
				>
					<div>xs=4</div>
				</Grid>
				<Grid
					item
					xs={4}
				>
					<div>xs=4</div>
				</Grid>
				<Grid
					item
					xs={8}
				>
					<div>xs=8</div>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Client
