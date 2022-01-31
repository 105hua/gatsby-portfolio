import React from "react";
import Helmet from "react-helmet";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ContactMePage = () => {

    return(

        <>
        
            <Helmet>

                <title>Joshua T | Contact Me</title>

            </Helmet>

            <h1>Contacting Me</h1>

            <p>

                There are a variety of ways to reach out to me, whether you would like to make a business enquiry or you want some help with your programming, I will<br />
                try to do my best!

            </p>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>1</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        
        </>



    )

}

export default ContactMePage