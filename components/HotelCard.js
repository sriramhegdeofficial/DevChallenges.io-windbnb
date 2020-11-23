import React from 'react';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
    starIconStyle: {
        color: 'rgba(235, 87, 87, 0.72)',
        width: '17px',
        height: '17px'
       
        
    }
  });

const HotelCard = (props) => {
    const classes = useStyles();
    var iPadPortrait = useMediaQuery('(min-width:760px)');
    var Desktop = useMediaQuery('(min-width:1200px)');
    return(
        <React.Fragment>
            <div className="container">
                <img className="hotel__image" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="image of hotel" />
                <div className="hotel__info__wrapper">
                       <div className="super__host__tag">Super host</div> 
                       <div className="hotel__meta__info">
                            Entire apartment . 2 beds
                       </div>
                       <div className="hotel__ratings__wrapper">
                            <StarRoundedIcon className={classes.starIconStyle} />
                            <div className="rating__value">4.40</div>
                       </div>
                       
                </div>
                <div className="hotel__special_description">Stylist apartment in center of the city</div>
            </div>
            <style jsx>{
                `

                .container {
                    width:  ${ iPadPortrait ? Desktop ? '30%' : '48%' : '100%'};
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;

                }
                
                .hotel__image {
                    width: 100%;
                    height: 238px;
                    object-fit: cover;
                    border-radius: 24px;
                    margin-bottom: 14px;
                   
                }

                .hotel__info__wrapper {
                    width: 100%;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    
                }

                .super__host__tag {
                    border: 1px solid #4F4F4F;
                    border-radius: 12px;
                    color: #4F4F4F;
                    text-transform: uppercase;
                    font-size: 0.625rem;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    padding: 6px 9px;

                }

                .hotel__meta__info {
                    flex: 1 1 auto;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 0.75rem;
                    color: #828282;
                    padding: 0px 8px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .hotel__ratings__wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .rating__value {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 0.75rem;
                    color: #4F4F4F;
                    margin-left: 3px;
                }

                .hotel__special_description {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #333333;
                }
                

                
                `
            }</style>
        </React.Fragment>
    )
}

export default HotelCard;