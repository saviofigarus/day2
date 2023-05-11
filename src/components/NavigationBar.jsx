import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>TrailApp</Typography>
                <Button><Link to={'/'}>State </Link></Button>
                <Button><Link to={'/table'}>Table </Link></Button>
                <Button><Link to={'/ax'}>Axios View </Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavigationBar