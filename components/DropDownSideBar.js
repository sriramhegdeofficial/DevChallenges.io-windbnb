import React from 'react';
import DropDownSideBarDesktop from './DropDownSideBarDesktop';
import DropDownSideBarMobile from './DropDownSideBarMobile';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const DropDownSideBar = (props) => {
    var DesktopMedium = useMediaQuery('(min-width: 1200px)');

    return(
        <React.Fragment>
            <div className="container">
                    { !DesktopMedium && <DropDownSideBarMobile {...props}/> }  
                    { DesktopMedium && <DropDownSideBarDesktop {...props} />} 
            </div>
          
           
            <style jsx>{
                `
                    .container {
                        display: ${props.isOpen ? 'block' : 'none'};
                    }
                
                `
            }</style>
        </React.Fragment>
    )
}

export default DropDownSideBar;