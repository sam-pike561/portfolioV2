import { useState } from 'react';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import "./works.scss";
import { SocialIcon } from "react-social-icons";

export default function Works() {
        const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
        id: 0,
        title: "Previous Portfolio Page",
        img: "./assets/portfolio_previous.png",
        address: "https://portfolio-fc3ad.web.app/",
        desc: "This is the first iteration of my portfolio page... please be   gentle."
        }
       ,
         {
        id: 2,
        title: "Amazonia",
        img: "./assets/3.png",
        address: "https://clone-8994b.firebaseapp.com/",
        desc: "Fake online bookstore turned fake online behemoth -- This clone uses React and it's libraries to replicate the box-modeled aesthetic we know and love from the original app to a tee! React Router is for the navigation between home, sign-in and checkout routes in an SPA. Also, the lightweight React Context API is stored as an added data-layer. This in turn helps keep track of, and update, pieces of state determining user-authentication, shopping cart updates and additional checkout functionality... Firebase for hosting."
        },
        {
        id: 1,
        title: "Wiki App",
        img: "./assets/1.png",
        address: "https://widget-d0kajbcbj.vercel.app/",
        desc: "Using Wikipedia’s database to create a search API with cross-network request help from Axios’ libraries. Also utilized google’s translate Api and reusable React components to toggle display of translate selector, text form and result field all linked through React Router Navigation functionality."
        },

        {
            id: 3,
            title: "SurvStat",
            img: "./assets/2.png",
            address: "https://glacial-wave-16608.herokuapp.com/",
            desc: "This survey/email collection API first receives the client, then sends them through an authorization flow with PassportJS's google strategy to gain permission to the client's profile information, inturn producing a unique cookie for network request identification. Now registered in MongoDB, the user has an account and can pay to update credits with Stripe and Stripe Form or click the survey icon and fill a template to email to customers, requiring a yes/no response. There is also a review page to confirm the information in the survey and the amount of credits required. Once clicked, the first response from each recipient triggers an update of state; changing and returning the survey results to the UI in individual project cards, inside the homepage, for the client to review the results.",
    
            }
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
              <a href={d.address}>
                                    <MobileFriendlyIcon className="mobileFriendlyIcon"/>
                                    </a>
                                  </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span><SocialIcon
              url="https://github.com/sam-pike561"
              className="mr-4"
              bgColor="crimson"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35, marginBottom: '40px' }}
            /></span>
                                
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
