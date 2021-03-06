import React from 'react';

//material ui
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import TextField from  '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//import style
import useStyles from './style';

//react router dom
import { Link } from 'react-router-dom';

function Registrasi(){
    
    const classes = useStyles();

    return <Container maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography 
            variant="h5"
            component="h1"
            className={classes.title}>Buat Akun Baru
            </Typography>
           
            <form>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    margin="normal"
                    label="Alamat Email"
                    fullWidth
                    required
                />
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    margin="normal"
                    label="Password"
                    fullWidth
                    required
                />
                 <TextField
                    id="ulangi_password"
                    type="password"
                    name="ulangi_password"
                    margin="normal"
                    label="Ulangi Password"
                    fullWidth
                    required
                />

                <Grid container className={classes.buttons}>
                    <Grid item xs>
                    <Button 
                    type="submit"
                    color="primary" 
                    variant="contained"
                    size="large" 
                    >Daftar</Button>
                    </Grid>

                    <Grid item>
                    <Button
                    component={Link}
                    variant="contained"
                    size="large"
                    to="/login"
                    >Login</Button>
                    </Grid>
                </Grid>
                    
            </form>

            
        </Paper>
    </Container>
}

export default Registrasi;