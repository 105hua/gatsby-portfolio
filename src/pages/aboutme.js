import React from "react";
import { Helmet } from "react-helmet";
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

const currentlyDoingStyle = {

    textAlign: "center",

}

const separator = {

    marginTop: "75px",

}

const centerAlign = {

    textAlign: "center",

}

const AboutMePage = () => {

    return(

        <>

            <Helmet>

                <title>Joshua T | About Me</title>

            </Helmet>

            <h1>About Me</h1>

            <div style={buttonGroupStyle}>

                <ButtonGroup color="inherit" variant="text" aria-label="text button group">

                    <Button href="./">Home</Button>
                    <Button href="./aboutme">About Me</Button>
                    <Button href="./myprojects">My Projects</Button>
                    <Button href="./contactme">Contact Me</Button>

                </ButtonGroup>

            </div>

            <div style={separator} id="earlybeginnings">

                <TypeWriter onInit={ (typewriter) => {

                    typewriter.typeString("How I Got Started.").start();

                } } ></TypeWriter>

                <FadeIn>

                    <p style={centerAlign}> 

                        My earliest memory in programming would likely be doing basic tinkering with Batch<br />
                        in Primary School. I never really knew what I was doing back then, however, looking<br />
                        back on it, I realised that was the start of my programming journey. For the remainder<br />
                        of my Primary School years, I would continue to tinker with computers, making a<br />
                        handful of basic programs and games in the process.<br /><br />

                        In my transition to and during Secondary School in 2014, I began learning my first High-Level<br />
                        High-Level Programming Language, Python 3. I learned this programming language as<br />
                        part of my GSCE Computer Science course. After graduating Secondary School, I moved<br />
                        on to do an A-Level in Computer Science and Games Development. During this course, I<br />
                        learned two new programming languages, these were C# and Visual Basic, as an<br />
                        understanding of the two languages were required for the course. After graduating College,<br />
                        I decided to enter University and study a Baccalaureate in Computer Science, which I am<br />
                        currently still studying.

                    </p>

                </FadeIn>

            </div>

            <div style={separator}>

                <div style={currentlyDoingStyle} id="currentlydoing">

                    <TypeWriter onInit={ (typewriter) => {

                        typewriter.typeString("What I am currently doing.").start();

                    } }></TypeWriter>

                    <p>

                        Nowadays, I am only specialising in three languages, those being C#, LUA and React. I have<br />
                        chosen C# because of its efficiency, LUA because of how easy it is to use inside of the<br />
                        popular games platform, Roblox and React because it gives me the ability to build beautiful<br />
                        websites with relative ease. I am also maintaining several projects on GitHub, to name a few,<br />
                        this website, which was built with Gatsby and Security Module Revived, which is a C# implementation<br />
                        of an old project of mine, called Security Module, which was a Module for VB.NET which made<br />
                        implementing Security a lot easier, by simplifying the process of using BouncyCastle.<br /><br />

                        You can read more about the projects I work on by going to the "My Projects" page.

                    </p>

                </div>

            </div>

        </>

    )

}

export default AboutMePage