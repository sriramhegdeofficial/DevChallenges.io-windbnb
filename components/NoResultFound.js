import React from 'react';

const NoResultFound = () => {
    return (
   <React.Fragment>
       <div className="container">
            No result found.
       </div>
       <style jsx>
           {`
           
            .container{
                width: 100%;
                display: flex;
                justify-content: center;
            }
           
           `
           
           }</style>
   </React.Fragment>
   )
}

export default NoResultFound;