import { useState } from 'react';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import "./works.scss"

export default function Works() {
        const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
        id: 0,
        title: "SurvStat",
        img: "./assets/2.png",
        desc: "jeh;lasdfjasdflasdf",

    },
            {
        id: 1,
        title: "E-Commerce App",
        img: "./assets/3.png",
        desc: "jeh;lasdfjasdflasdf",
    },
        {
        id: 2,
        title: "SurvStat",
        img: "./assets/2.png",
        desc: "jeh;lasdfjasdflasdf",

    },
            {
        id: 3,
        title: "Wiki App",
        img: "./assets/1.png",
        desc: "jeh;lasdfjasdflasdf",

        
    },
                {
        id: 4,
        title: "WebRTC App",
        img: "./assets/intro_pic_portfolio.png",
        desc: "jeh;lasdfjasdflasdf",
    },
                    {
        id: 5,
        title: "Amazonia",
        img: "./assets/1.png",
        description: "jeh;lasdfjasdflasdf",

    },
                     {
        id: 6,
        title: "Amazonia",
        img: "./assets/1.png",
        description: "jeh;lasdfjasdflasdf",

    },
                      {
        id: 7,
        title: "Amazonia",
        img: "./assets/1.png",
        description: "jeh;lasdfjasdflasdf",

    },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0 )
    }
    return (
        <div className="works" id="works">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <MobileFriendlyIcon className="mobileFriendlyIcon"/>
                                  </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))
                }
            </div>
            <img src="./assets/right_arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="./assets/right_arrow.png" className="arrow right" alt=""  onClick={()=>handleClick()} />


           
        </div>
    )
}
