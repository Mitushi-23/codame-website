import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import team from "../../assets/team.png";
import linkedinImg from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";
import twitterImg from "../../assets/twitter.svg";
import instagramImg from "../../assets/instagram.svg";
import { teamData } from "./data";
import { CPData } from "./data";
import { WebDevData } from "./data";

// export default function Card(props) {

//     const [group, setGroup] = useState();

// return (
//     <div className="card-container">
//     <div class="container grid grid-cols-3 gap-3 mx-auto">
//       <div class="w-40 group">
//         <img className="rounded-full border-8 border-lightGreen" src={team} />
//         <h3 className="uppercase mt-3 text-center text-darkBlue font-semibold">
//           {props.name}
//         </h3>
//         <div className="w-40 hidden group-hover:block absolute">
//         <div className="grid grid-cols-4 gap-4">
//        <a href="https://reactjs.org/">  <img className="linkedin" src={linkedinImg} /></a>
//        <a href="https://reactjs.org/">     <img className="github" src={githubImg} /></a>
//        <a href="https://reactjs.org/">     <img className="twitter" src={twitterImg} /></a>
//        <a href="https://reactjs.org/">   <img className="instagram" src={instagramImg} /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// }

export default function Card(props) {
  const [group, setGroup] = useState();

  const category = props.category;
  if (category == "Founding Members") {
    return (
      <>
        {teamData.map((data, key) => {
          return (
            <div key={key}>
              <TeamMember
                key={key}
                ImgUrl={data.ImgUrl}
                Name={data.Name}
                Linkedin={data.Linkedin}
                Github={data.Github}
                Twitter={data.Twitter}
                Instagram={data.Instagram}
              />
            </div>
          );
        })}
      </>
    );
  }
  if (category == "CP") {
    return (
      <>
        {CPData.map((data, key) => {
      console.log(data.ImgUrl)
          return (
            <div key={key}>
              <TeamMember
                key={key}
                ImgUrl={data.ImgUrl}
                Name={data.Name}
                Linkedin={data.Linkedin}
                Github={data.Github}
                Twitter={data.Twitter}
                Instagram={data.Instagram}
              />
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      {WebDevData.map((data, key) => {
        return (
          <div key={key}>
            <TeamMember
              key={key}
              ImgUrl={data.ImgUrl}
              Name={data.Name}
              Linkedin={data.Linkedin}
              Github={data.Github}
              Twitter={data.Twitter}
              Instagram={data.Instagram}
            />
          </div>
        );
      })}
    </>
  );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const TeamMember = ({ ImgUrl, Name, Linkedin, Github, Twitter, Instagram }) => {
  const pic = JSON.stringify({ ImgUrl });
  const array = pic.split(":");
  const array1 = array[1].split("}");
  const answer = array1[0].replace(/["]+/g, "");

  if (!ImgUrl) return <div />;
  return (
    <div className="card-container">
      <div class="container grid grid-cols-3 gap-3 mx-auto">
        <div class="w-40 group">
          <img
            className="rounded-full border-8 border-lightGreen"
            src={images[answer]}
          />
          <h3 className="uppercase mt-3 text-center text-darkBlue font-semibold">
            {Name}
          </h3>
          <div className="w-40 hidden group-hover:block absolute">
            <div className="grid grid-cols-4 gap-4">
              <a href={Linkedin}>
                {" "}
                <img className="linkedin" src={linkedinImg} />
              </a>
              <a href={Github}>
                {" "}
                <img className="github" src={githubImg} />
              </a>
              <a href={Twitter}>
                {" "}
                <img className="twitter" src={twitterImg} />
              </a>
              <a href={Instagram}>
                {" "}
                <img className="instagram" src={instagramImg} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
