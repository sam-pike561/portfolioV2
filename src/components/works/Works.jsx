import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import "./works.scss"

export default function Works() {
    
    const data = [
            {
        id: 1,
        title: "E-Commerce App",
        img: "./assets/3.png"
    },
        {
        id: 2,
        title: "SurvStat",
        img: "./assets/2.png"
    },
            {
        id: 3,
        title: "Wiki App",
        img: "./assets/1.png"
    },
                {
        id: 4,
        title: "WebRTC App",
        img: "./1.png"
    },
                    {
        id: 5,
        title: "Amazonia",
        img: "./1.png"
    },
                     {
        id: 6,
        title: "Amazonia",
        img: "./1.png"
    },
                      {
        id: 7,
        title: "Amazonia",
        img: "./1.png"
    },
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
            <img src="./assets/rightArrow.png" className="arrow right" alt="" />
            <img src="./assets/rightArrow.png" className="arrow left" alt=""  />


           
        </div>
    )
}
