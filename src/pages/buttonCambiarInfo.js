import React, { useContext } from 'react'
import {Button} from '@material-ui/core';

 const ButtonCmbiarInfo = () => {

    const newObject = {
        nombre: 'Gaviria',
        edad: '25'
    }
    
    return (
        <div>
            <Button variant="contained"  color="primary">CAMBIAR</Button>
        </div>
    )
}

export default ButtonCmbiarInfo;
