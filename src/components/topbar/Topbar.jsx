import MailIcon from '@mui/icons-material/Mail';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">PIKE | PORTFOLIO.</a>
                    <div className="itemContainer">
                        <PrecisionManufacturingIcon className="icon"/>
                        <span>+1 (561) 427 3250</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>samuelp1dev@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
