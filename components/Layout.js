import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.6rem'
      },
      '*::-webkit-scrollbar-track': {
        
        backgroundColor: 'transparent'
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '30px',
        backgroundColor: 'rgba(235,87,87,0.7)'
        
        
      }
    },
    container: {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
    }
  });

export default function Layout({ children }) {

    
    const classes = useStyles();


    return (
        <React.Fragment>
            <div className={`${classes.container} ${classes['@global']}`}>
                {children}
            </div>
            
        <style jsx>{`

            

            

    
        `}</style>
        </React.Fragment>
    )
  }