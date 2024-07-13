import { Box, Grid } from '@mui/material';

import RegisterClients from '../register/singleContact/page';

function Client() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <RegisterClients />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Client;
