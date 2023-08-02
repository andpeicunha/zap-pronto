import { BoxCore } from '@/app/components/common/page'
import { Box, Grid } from '@mui/material'
import React from 'react'

function Client() {
	return (
		<Box>
			<Grid container>
				<Grid
					item
					xs={12}
				>
					<BoxCore>Cadastro</BoxCore>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Client
