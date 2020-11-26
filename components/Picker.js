import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    iconStyle: {
        color: '#828282',
        width: '14px',
        height: '14px'
       
        
    }
  });

const Picker = (props) => {
    const classes = useStyles();
    

    
    return(
        <React.Fragment>
            <div className="container">
               
                   
                <button 
                className="btn minus"
                onClick={() => {
                    
                    props.setPickerValue(props.pickerType, 'minus');
                    console.log(`${props.pickerType}, minus`);
                    console.log(`Adult : ${props.adultPickerValue}, child: ${props.childrenPickerValue}`);
                
                }}><RemoveIcon className={classes.iconStyle} /></button>
                         <div className="picker__value">{props.pickerType === 'adult' ? `${props.adultPickerValue}` : `${props.childrenPickerValue}`} </div>
                 <button 
                className="btn plus"
                onClick={() => {
                    props.setPickerValue(props.pickerType, 'plus');
                    console.log(`${props.pickerType}, plus`);
                    console.log(`Adult : ${props.adultPickerValue}, child: ${props.childrenPickerValue}`);
                }}><AddIcon className={classes.iconStyle} /></button>
            </div>
            <style jsx>
                {
                    `

                    .container {
                        display: flex;
                        width: 80px;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .btn {
                        width: 23px;
                        height: 23px;
                        border: 1px solid #828282;
                        background: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 4px;
                        outline: none;

                    }

                    ..btn:focus {
                        outline: none;
                    }

                    .picker__value {
                        font-family: 'Mulish', sans-serif;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 0.875rem;
                        color: #333333;

                    }
                    
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default Picker;