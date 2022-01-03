import "./testimonials.scss";

export default function Testimonials() {
  const data = 
[
  {
  "id": 1,
  "title": "JS Algorithms + Data Structures",
  "name": "Stephen Grider's",
  "leftImage": "assets/javascript-logo.png", 
  "img": "./assets/grider.png",
  "icon": "/assets/udemy-image.png",
  "desc": "Master commonly asked interview questions. Tackle common data structures used in web development. Practice dozens of different challenges. Use Javascript to solve challenging algorithms",
  }, 
  {
  "id": 2,
  "name": "Colt Steele's",
  "title": "Modern React/Redux Bootcamp",
  "leftImage": "assets/react-icon.svg.png", 
  "img": "assets/colt.png",
  "icon":  "/assets/udemy-image.png",
  "desc": "Use React Hooks! (My favorite part of React!). The new Context API. State management w/ useReducer + use Context (Redux Lite). The basics of React (props, state, etc). Master React Router. React State Management Patterns. Drag & Drop With React. Writing dynamically styled components w/ JSS. Common React Router Patterns. Work with tons of libraries and tools.",
  "featured": "true",
  }, 
  {
  "id": 3,
  "name": "Stephen Grider's",
  "title": "Node with React: Fullstack Web Development",
  "leftImage": "assets/react-icon.svg.png", 
  "img": "assets/grider.png",
  "icon": "/assets/udemy-image.png",
  "desc": "Create boilerplate starter projects with React, Redux, Express, and Mongo. Understand common web technologies and design patterns to connect them together Master deployment techniques between the production and development environments. Make an app with Google OAuth authentication. Learn to effectively create and send emails from a backend server.",
  }
]
    
    return (
        <div className="testimonials" id="testimonials">
            <h1>Certifications</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src={d.leftImage}
                            className="left" alt="" />
                            <img
                                className="user"
                                src={d.img}
                                alt="" />
                            <img src={d.icon} className="right" alt="" />
                        </div>
                        <div className="center">{d.desc}</div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
}
