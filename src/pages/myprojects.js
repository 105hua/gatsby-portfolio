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

            
        
        </>

    )

}

export default MyProjectsPage