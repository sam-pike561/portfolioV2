import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./works.scss"

export default function Works() {
    
    const data = [
        {
            id: "featured",
            title: "Featured App",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design App",
        },
        {
            id: "content",
            title: "Content",
        }
    ];
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <MobileFriendlyIcon className="mobileFriendlyIcon"/>
                                  </div>
                                <h2>Title</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusam, labor.</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="./assets/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ArrowForwardIosIcon className="arrow left" />
            <ArrowForwardIosIcon className="arrow right" />

           
        </div>
    )
}
