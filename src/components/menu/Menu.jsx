import React from 'react'
import "./menu.scss"
import { SocialIcon } from "react-social-icons";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() =>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <div className="nav__socialIcons py-3 px-3 my-6 pt-6 flex-end">
            <SocialIcon
              url="https://www.linkedin.com/in/samuel-pike-557350207/"
              className="mr-4"
              target="_blank"
              bgColor="rgb(24, 74, 140)"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="mailto:sampike1994@gmail.com"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/sam-pike561"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/pike_webdev"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
            </ul>
           
        </div>
    )
}
