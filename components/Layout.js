import React from 'react';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <div className="container">{children}</div>
        <style jsx>{`

            .container {
                width: 100%;
                min-height: 100%;
                padding: 0px 12px;
            }
    
    
        `}</style>
        </React.Fragment>
    )
  }