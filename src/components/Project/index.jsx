import React from "react";
import musicApp from "../../assets/music-app.png";
import marketApp from "../../assets/market-app.png";
import finbud from "../../assets/finbud.png";
import dpuHack from "../../assets/DePauw-hack.png";
import safeRoute from "../../assets/safe-route.jpg";
import googleAPI from "../../assets/google-api.jpg";
// import ProjectItem from "../../util/ProjectItem";
import "./index.css";
import { Parallax } from "../../util/Parallax";

const Project = () => {
  const projects = [
    {
      img: finbud,
      title: "FinBud AI",
      desc: "FinBud AI is a full-stack financial app using AI power, Vue.JS, React, MongoDB, Passprt and Netlifty to track stock on real-time, get personalized trade suggestions, and get financial guidance by AI Chatbot",
      live:"https://finbud.pro/",
      github: "https://github.com/finbud2024/Finbud"
    },

    {
      img: musicApp,
      title: "Melify App",
      desc: "Melify is a full-stack music app using Java (Spring Boot) and React, integrating Spotify and OpenAI APIs for personalized playlist recommendations based on emotions, with features for streaming, listening, and sharing tracks or playlists.",
      live:"https://melify-app.netlify.app/",
      github: "https://github.com/SWE1dePauwMusic/music_app"
    },

    {
      img: dpuHack,
      title: "DePauw Hackathon Website",
      desc: "DePauw Student Website using the MERN stack, featuring news, events, personal narratives, and an interactive course review system integrated with Google Translate and Dialogflow to enhance academic education and student well-being.",
      live:"https://huelily.github.io/Hackathon_website/",
      github: "https://github.com/HueLily/Hackathon_website"
    },

    {
      img: marketApp,
      title: "Renoon Same",
      desc: "Renoon is a university-focused e-commerce website using React and Node, featuring buying, selling, and exchange functionalities with secure authentication and interactive post management.",
      live:"https://github.com/Renoon-same/frontend",
      github: "https://github.com/Renoon-same/frontend"
    },
    {
      img: googleAPI,
      title: "Google API Workshop",
      desc: "WICS website is a demo website, that was used in Google API Workshop, using Google APIs, offering students updated information on WICS events, hackathons, and competitions, with features like Google Translate, Google Maps, and a Dialogflow-supported chatbot for enhanced accessibility and interaction.",
      live:"https://github.com/HueLily/google_api_workshop",
      github: "https://github.com/HueLily/google_api_workshop"
    },

    {
      img: safeRoute,
      title: "Safe Route",
      desc: "Safe Route is a front-end website created during the Rewriting the Code hackathon, designed to help disabled individuals, women, and children by using the Calendly API and React to connect users with women's centers, disability services, and child support services for appointment scheduling.",
      live:"https://github.com/HueLily/safe-route-copy",
      github: "https://github.com/HueLily/safe-route-copy"
    },
  ];
  return (
    <section className="project" id="project">
      <Parallax projects={projects} />
    </section>
  );
};
export default Project;
