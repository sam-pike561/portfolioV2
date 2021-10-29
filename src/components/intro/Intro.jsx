import "./intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/circlePortrait.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Samuel Pike</h1>
                    <h3>Freelance <span>Designer</span></h3>
                </div>
                <a href="#portfolio">
                   <KeyboardArrowDownIcon />
                </a>
            </div>
        </div>
    )
}
