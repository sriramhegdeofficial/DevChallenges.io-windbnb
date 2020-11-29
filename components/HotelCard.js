import React, { useEffect} from 'react';
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
    



    
    return(
        <React.Fragment>
            <div className="container">
                <img className="hotel__image" src={props.hotelCard.photo} alt="image of hotel" />
                <div className="hotel__info__wrapper">
                       <div className="super__host__tag">Super host</div> 
                       <div className="hotel__meta__info">
                            {props.hotelCard.type}  {props.hotelCard.beds !== null ? props.hotelCard.beds === 1 ? `. ${props.hotelCard.beds} bed` : `. ${props.hotelCard.beds} beds` : ``}
                       </div>
                       <div className="hotel__ratings__wrapper">
                            <StarRoundedIcon className={classes.starIconStyle} />
                            <div className="rating__value">{props.hotelCard.rating}</div>
                       </div>
                       
                </div>
                <div className="hotel__special_description">{props.hotelCard.title}</div>
            </div>
            <style jsx>{
                `

                .container {
                    width:  100%;
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
                    display: ${props.hotelCard.superHost ? 'flex' : 'none'};

                }

                .hotel__meta__info {
                    flex: 1 1 auto;
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 0.75rem;
                    color: #828282;
                    padding: ${props.hotelCard.superHost ? '0px 8px' : '0px'};
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
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 80%;
                }

                @media only screen and (min-width: 760px) {
                    .container {
                        max-width:  48%;
                        margin-bottom: 30px;
    
                    }
                  }

                  @media only screen and (min-width: 1200px) {
                    .container {
                        max-width: 30%;
                        margin-bottom: 30px;
                        
                    }
                  }
                

                
                `
            }</style>
        </React.Fragment>
    )
}

export default HotelCard;