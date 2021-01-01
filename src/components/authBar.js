import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import Box from '@material-ui/core/Box'

import '../auth.css'

function authBar() {
    return (
        <div className='container1'>
            <div className='right'>
                <Box display='flex' flexDirection='row' justifyContent='flex-end' marginRight={1} className='list' >
                    <Box className='Boxli'><PersonIcon style={{color:'azure', marginTop:5,marginRight:5}}/></Box>
                    <Box className='Boxli'><Link className='li'>Login</Link> </Box>
                    <Box className="br"></Box>
                    <Box className='Boxli'><Link className='li'>Register</Link> </Box>
                </Box>
            </div>
        </div>
    )
}

export default authBar
