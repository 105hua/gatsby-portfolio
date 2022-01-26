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

const currentlyDoingStyle = {

    textAlign: "right",

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

                    typewriter.typeString("How I Got Started.").start();

                } } ></TypeWriter>

                <FadeIn>

                    <p class="alignleft">

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

                    <p class="alignright">

                        Nowadays, I am trying to stick to three programming languages, those being C#, LUA and React.<br />
                        C# allows me to create efficient and easy to obtain Desktop Applications, LUA allows me to work<br />
                        with the popular online game platform, Roblox and React allows me to create beautiful and responsive<br />
                        websites.

                    </p>

                </div>

            </div>

        </>

    )

}

export default AboutMePage