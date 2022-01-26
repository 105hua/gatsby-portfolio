import React from "react";
import TypeWriter from "typewriter-effect";
import FadeIn from "react-fade-in";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttonGroupStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",

}

const separator = {

    marginTop: "75px",

}

const AboutMePage = () => {

    return(

        <>

            <h1>About Me</h1>

            <div style={buttonGroupStyle}>

                <ButtonGroup color="inherit" variant="text" aria-label="text button group">

                    <Button href="./">Home</Button>
                    <Button href="./aboutme">About Me</Button>
                    <Button>My Projects</Button>
                    <Button>Contact Me</Button>

                </ButtonGroup>

            </div>

            <div style={separator} id="earlybeginnings">

                <TypeWriter onInit={ (typewriter) => {

                    typewriter.typeString("Early Beginnings...").start();

                } } ></TypeWriter>

                <FadeIn>

                    <p class="alignleft">

                        My earliest memory in programming would likely be doing basic tinkering with Batch<br />
                        in Primary School. I never really knew what I was doing back then, however, looking<br />
                        back on it, I realised that was the start of my programming journey. For the remainder<br />
                        of my Primary School years, I would continue to tinker with computers, making a<br />
                        handful of basic programs and games in the process.<br /><br />

                        In my transition to and during Secondary School, I began learning my first High-Level<br />
                        Programming Language, Python 3. I learned this programming language as part of my<br />
                        GSCE Computer Science course, during which I took on my first Programming Project.<br />
                        The project in question required me to create a Register and Login screen, which would<br />
                        store its data inside of a CSV File. 

                    </p>

                </FadeIn>

            </div>

        </>

    )

}

export default AboutMePage