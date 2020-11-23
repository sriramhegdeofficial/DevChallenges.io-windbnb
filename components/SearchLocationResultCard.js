import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    locationIconStyle: {
        color: '#4F4F4F',
        width: '25px',
        height: '25px',
        marginRight: '10px'
        
    }
  });

const SearchLocationResultCard = (props) => {

    const classes = useStyles();
    return(
        <React.Fragment>
            <div className="container">
                <LocationOnIcon className={classes.locationIconStyle}/>
                <h6 className="search__location__title">Helsinki, Finland</h6>
            </div>
            <style jsx>
                {
                    `
                    .container {
                        width: 100%;
                        padding: 13px 7.5%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    .search__location__title {
                        font-family: 'Mulish', sans-serif;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 0.875rem;
                        color: #4F4F4F;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    
                    
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default SearchLocationResultCard;