import React from "react";
import {useState} from 'react';
import { Link } from "react-router-dom";
import team from "../../assets/team.png";
import linkedinImg from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";
import twitterImg from "../../assets/twitter.svg";
import instagramImg from "../../assets/instagram.svg";

export default function Card(props) {

    const [group, setGroup] = useState();
    


  return (
    <div className="card-container">
      <div class="container grid grid-cols-3 gap-3 mx-auto">
        <div class="w-40">
          <img className="rounded-full border-8 border-lightGreen" src={team} />
          <h3 className="uppercase mt-3 text-center text-darkBlue font-semibold">
            {props.name}
          </h3>
          <div className="w-40 hidden group-hover:block">
          <div className="grid grid-cols-4 gap-4">
            <img className="linkedin" src={linkedinImg} />
            <img className="github" src={githubImg} />
            <img className="twitter" src={twitterImg} />
            <img className="instagram" src={instagramImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
