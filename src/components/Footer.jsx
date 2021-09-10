import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer=()=>{
    const year = new Date().getFullYear();
    return(
        <React.Fragment>
            <div>
                <footer> Copyrights <CopyrightIcon/> {year}</footer>
            </div>
        </React.Fragment>
    )
}
export default Footer;