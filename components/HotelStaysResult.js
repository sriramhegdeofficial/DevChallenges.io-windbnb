import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const HotelStaysResult = (props) => {

    
    

    return(
        <React.Fragment>
            <div className="container">
                <div className="title__wrapper">
                    <h3 className="title">Stays in Finland</h3>
                    <h5 className="stays__count">{props.staysCount > 0 ?  props.staysCount === 1 ? `${props.staysCount} stay` : `${props.staysCount} stays` : ``  }</h5>
                </div>
                <div className="hotel__card_wrapper">
                        {props.children}
                </div>
                
            </div>
            <style jsx>{
                `

                .container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hotel__card_wrapper {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    
                }

                .title__wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .title {
                    font-family: 'Montserrat', san-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1.125rem;
                    color: #333333;
                    text-transform: capitalize;
                }

                .stays__count {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 0.875rem;
                    color: #4F4F4F;
                }

                @media only screen and (min-width:760px) {

                    .hotel__card_wrapper {
                   
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
 
                }

                @media only screen and (min-width:1200px) { 

                    
                    .hotel__card_wrapper {
                        flex-wrap: wrap;
                        
                    }


                }




                
                
                `
            }</style>
        </React.Fragment>
    )
}

export default HotelStaysResult;