import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const HotelStaysResult = (props) => {

    var iPadPortrait = useMediaQuery('(min-width:760px)');
    

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
                    flex-direction: ${iPadPortrait ? 'row' : 'column'};
                    flex-wrap: ${iPadPortrait ? 'wrap' : 'nowrap'};
                    justify-content: ${iPadPortrait ? 'space-between' : 'normal'};
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
                
                
                `
            }</style>
        </React.Fragment>
    )
}

export default HotelStaysResult;