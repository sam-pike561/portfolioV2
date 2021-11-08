import "./testimonials.scss";

export default function Testimonials() {
  const data = 
[{
  "id": 1,
  "title": "Violet",
  "name": "tha God",
  "img": "./assets/portrait_pike.png",
  "icon": "http://dummyimage.com/184x100.png/5fa2dd/ffffff",
  "desc": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
}, {
    "id": 2,
      "name": "tha God",
  "title": "Pink",
  "img": "http://dummyimage.com/187x100.png/dddddd/000000",
  "icon": "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
    "desc": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  "featured": "true",
}, {
  "id": 3,
  "name": "tha God",
  "title": "Goldenrod",
  "img": "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
  "icon": "http://dummyimage.com/157x100.png/dddddd/000000",
  "desc": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
}]
    
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right_arrow.png" className="left" alt="" />
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
