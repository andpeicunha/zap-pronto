import { Box, Grid } from '@mui/material'
import React from 'react'

import RegisterClients from './register/page'

function Client() {
	return (
		<Box>
			<Grid container>
				<Grid
					item
					xs={12}
				>
					<RegisterClients />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Client
