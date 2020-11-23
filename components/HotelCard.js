import React from 'react';


const HotelCard = (props) => {
    return(
        <React.Fragment>
            <div className="container">
                <img className="hotel_image" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="image of hotel" />
                <div className="hotel__info_wrapper">
                       <div className="super__host_tag">Super host</div> 
                </div>
            </div>
            <style jsx>{
                `

                .container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
                .hotel_image {
                    width: 100%;
                    height: 238px;
                    object-fit: cover;
                    border-radius: 24px;
                    margin-bottom: 14px;
                    max-width: 450px;
                }

                .hotel__info_wrapper {
                    width: 100%;
                   
                    display: flex;
                    align-items: center;
                }

                .super__host_tag {
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
                
                `
            }</style>
        </React.Fragment>
    )
}

export default HotelCard;