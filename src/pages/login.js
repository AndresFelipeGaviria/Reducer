import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField, FormControl, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LogoReact from '../image/cardReact.jpg';
import { jsonData } from  '../actions/login-action';
import Snackbar from '../snackbar';
import * as yup from 'yup';


const styles = makeStyles({
    backgroundLogin: {
        background: 'linear-gradient(to left bottom, #100f11, #221832, #321f55, #40267b, #4d2da4, #5d30b6, #6d33c8, #7f34da, #9433d7, #a732d4, #b732d0, #c634cd)',
        position: 'absolute',
        height: '100%', 
        width: '100%'
    },
    marginCardSessionUser: {
        margin : '11% 2%'
    }
})

function Login(props) {

    const classes = styles();
    const [infoUser, setInfoUser] = useState({
        email: '',
        password: '',
    });

    const schema = yup.object().shape({
        username: yup.string().nullable().required('Nombre es requerido'),
        password: yup.string().nullable().required('Contraseña requerida'),
    });
    
    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const showData = async() => {
            const respuesta = await jsonData();
            console.log(respuesta);
            setInfoUser({... infoUser, password: respuesta.username , email: respuesta.email});
        }
        showData();
    }, []);

    const onSubmit = (data) => {
        console.log(data)
       if(data.username === infoUser.email && data.password === infoUser.password) {
          setTimeout(()=>{
            props.history.push('animales');
          },2000);
       } else {

       }
    }
    
    return (
        <div className={classes.backgroundLogin}>
              <Grid container justify="center" alignItems="center" >
            <Card  className={classes.marginCardSessionUser}>
            <CardActionArea>
            <CardMedia
               component="img"
               alt="Contemplative Reptile"
               height="140"
               image={LogoReact}
               title="Contemplative Reptile"
            />
            <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container spacing={3} justify="center" alignItems="center" direction="row" >
                <Grid item xs={12} md={12} lg={12}>
                <FormControl fullWidth>
                    <TextField 
                        inputRef={register}
                        fullWidth  
                        name="username" 
                        placeholder="Correo electronico" 
                        variant="outlined"
                        label='Correo electronico'
                        error={errors.hasOwnProperty('username') && errors['username'].message}
                        helperText={errors.hasOwnProperty('username') && errors['username'].message}
                    />
                    </FormControl>
                </Grid>         
                <Grid item xs={12} md={12} lg={12}>
                <FormControl fullWidth >
                    <TextField 
                        fullWidth 
                        inputRef={register}
                        name="password" 
                        type="password"
                        placeholder="Contraseña" 
                        variant="outlined"
                        label='Contraseña'
                        error={errors.hasOwnProperty('password') && errors['password'].message}
                        helperText={errors.hasOwnProperty('password') && errors['password'].message}
                    />
                    </FormControl> 
                </Grid>
                <Grid item xs={12} md={12} lg={12}> 
                    <Button type="submit" variant="contained" color="primary">ENVIAR</Button>
                </Grid>
                </Grid>
            </form>
            </CardContent> 
           </CardActionArea>
            </Card>
        </Grid>
        <Snackbar/>
        </div>
      
       
    )
}

export default Login
