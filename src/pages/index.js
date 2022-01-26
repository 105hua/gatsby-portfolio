import React from "react";
import "./css/index.css";
import FadeIn from "react-fade-in";
import ReactRoundedImage from "react-rounded-image";
import ProfilePic from "../images/pfp.png";
import GatsbyLogo from "../images/icon.png";
import TypeWriter from "typewriter-effect";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";

const buttonGroupStyle = {

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
  color: "white",

}

const IndexPage = () => {
  return (

    <>

      <FadeIn>

        <h1>Hello 👋</h1>

        <div id="roundedprofilepic">

          <ReactRoundedImage image={ProfilePic} roundedSize="0" />
        
        </div>

      </FadeIn>

      <div id="typewriter">

        <TypeWriter onInit={ (typewriter) => {

            typewriter.typeString("The names Josh.").start();

        } } />

      </div>

      <FadeIn>

        <p>

          Welcome to my online portfolio!

        </p>

        <p>

          Here, you can learn about me and my experience in Software Development as well as some projects that I am working on or have
          worked on.

        </p>

        <div style={buttonGroupStyle}>

        <ButtonGroup color="inherit" variant="text" aria-label="text button group">

          <Button href="./">Home</Button>
          <Button href="./aboutme">About Me</Button>
          <Button>My Projects</Button>
          <Button>Contact Me</Button>

        </ButtonGroup>

        </div>

        <h5>Website made with 💖 by Josh with Gatsby.</h5>

        <img id="gatsbylogo" src={GatsbyLogo}/>

      </FadeIn>

    </>

  )
}

export default IndexPage
