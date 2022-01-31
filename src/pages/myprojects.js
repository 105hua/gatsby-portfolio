import React from "react";
import { Helmet } from "react-helmet";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const buttonGroupStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",

}

const orderedListStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: "bold",
    fontSize: "20px",

}

const centerImageStyle = {

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "25px"

}

const headerTwoStyle = {

    fontSize: "26px",
    fontFamily: "'Ubuntu', sans-serif",
    textAlign: "center"

}

const projectDescriptionStyle = {

    marginTop: "20px",

}

const MyProjectsPage = () => {

    return(

        <>
        
            <Helmet>

                <title>Joshua T | My Projects</title>

            </Helmet>

            <h1>My Projects</h1>

            <div style={ buttonGroupStyle }>

                <ButtonGroup color="inherit" variant="text" aria-label="text button group">

                    <Button href="./">Home</Button>
                    <Button href="./aboutme">About Me</Button>
                    <Button href="./myprojects">My Projects</Button>
                    <Button href="./contactme">Contact Me</Button>

                </ButtonGroup>

            </div>

            <p class="aligntocenter">
                During my time as a Software Developer, I have worked on many projects, both on my own and with other Developers. Below is a collection of some of my recent work, which is updated regularly.
            </p>

            <div id="securitymodulerevivedsection">

                <h2 style={ headerTwoStyle }>Security Module Revived</h2>

                <a href="https://github.com/105hua/Security-Module-Revived"><img alt="It looks like you can't view any images, try reloading the page again." style={ centerImageStyle } src="https://gh-card.dev/repos/105hua/Security-Module-Revived.svg" /></a>

                <p style={ projectDescriptionStyle }>

                    Security Module Revived is a cryptography project that aims to make using BouncyCastle a lot easier. This will be done by simply providing a file path<br />
                    and a key, where the module will take over and do the rest. The module is currently a Work-In-Progress and there are no plans to take it out of this<br />
                    phase at this stage, however, rest assured that this project is under active development!<br /><br />

                    Below is a list of currently planned Cipher Algorithms:

                </p>

                <div style={ orderedListStyle }>

                    <ol>

                        <li>AES</li>
                        <li>Serpent</li>
                        <li>TwoFish</li>

                    </ol>

                </div>

                <p style={ projectDescriptionStyle }>

                    Below is a list of currently planned Hashing Algorithms:

                </p>

                <div style={ orderedListStyle }>

                    <ol>

                        <li>SHA-2</li>
                        <li>SHA-3</li>
                        <li>MD5</li>
                        <li>RIPEMD320</li>
                        <li>Whirlpool</li>

                    </ol>

                </div>

            </div>
            <div id="gatsbyportfoliosection">

                <h2 style={ headerTwoStyle }>Gatsby Portfolio</h2>

                <a href="https://github.com/105hua/gatsby-portfolio"><img alt="It looks like you can't view any images, try reloading the page again." style={ centerImageStyle } src="https://gh-card.dev/repos/105hua/gatsby-portfolio.svg" /></a>

                <p style={ projectDescriptionStyle }>

                    Gatsby Portfolio, in short terms, is a small Portfolio Website that I have created in an effort to load React. In case you haven't got the memo, you are<br />
                    viewing a build of Gatsby Portfolio right now! I intend to update Gatsby Portfolio regularly until I am satisfied with how the website looks. I am also<br />
                    working on this in conjunction with Security Module Revived.

                </p>

            </div>
        
        </>

    )

}

export default MyProjectsPage