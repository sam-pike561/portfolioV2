import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    designPortfolio,
    // contentPortfolio
} from "../../data.js";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured App",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "design",
            title: "Design App",
        },
        {
            id: "Routing",
            title: "Content",
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            // case "content":
            //     setData(contentPortfolio);
            //     break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
