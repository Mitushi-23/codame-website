import React from "react";
import codame from "../assets/footer/codame.png";
import discord from "../assets/footer/discord.svg";
import facebook from "../assets/footer/facebook.svg";
import github from "../assets/footer/github.svg";
import instagram from "../assets/footer/instagram.svg";
import linkedin from "../assets/footer/linkedin.svg";
import twitter from "../assets/footer/twitter.svg";
import youtube from "../assets/footer/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer p-5 w-full bg-lightGreen flex flex-row">
        <div className="footer-sec-1 p-3  w-[50%] m-3">
          <img className="" src={codame} />
          <h3 className="m-1 text-2xl  font-medium text-left">
            Codame - The Coding Club of IIIT Bhopal{" "}
          </h3>
          <p className="m-1 text-lg font-medium text-left">
            Indian Institute of Information Technology, Bhopal, MANIT Campus,
            Bhopal, Madhya Pradesh - 462003
          </p>
        </div>
        <div className="footer-sec-1 p-3 rounded-xl text-center w-[50%] m-3">
          <h3 className="m-1 text-darkBlue font-semibold  text-left text-2xl">
            {" "}
            Socials
          </h3>
          <div className="m-5 grid grid-cols-4 gap-3 ">
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={discord}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={facebook}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={github}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={instagram}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={linkedin}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={twitter}></img>
            <img className="w-[50%] m-3 hover:shadow-2xl shadow-darkBlue" src={youtube}></img>
          </div>
        </div>

        <div className="footer-sec-1 p-3 rounded-xl bg-darkBlue w-[50%] m-3">
          <h3 className="m-1 text-lightGreen font-semibold text-2xl">
            {" "}
            Get In Touch
          </h3>
          <input type="text" className="p-3 m-2 outline-none rounded-sm placeholder:text-darkBlue placeholder:font-inconsolota bg-lightGreen" placeholder="Email Address" ></input>
          <input type="text" className="p-3 m-2 outline-none rounded-sm placeholder:text-darkBlue placeholder:font-inconsolota bg-lightGreen"     style={{ height: "100px" }} placeholder="Message" ></input>
          <br />
          <button type="submit" className="submit p-4 m-2 bg-lightGreen rounded-xl text-medium font-inconsolota">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
