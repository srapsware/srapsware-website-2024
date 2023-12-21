import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'

import SocialLinks from "@components/SocialLinks";

import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {

    const [candidat, setCandidat] = useState({
        name: "",
        email: "",
        phone: "",
        msg_subject: "",
        message: "",
    });
    const [user, setUser] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        if (candidat.name === "")
            return alert("Your name is empty.");


        let token = 'recaptcha token';
        let formName = 'Contact page';

        axios.post('https://crm.ashokseedplant.com/api/ezforms/submit', { token, formData: JSON.stringify(candidat) })
            .then((res) => {
                // console.log(res)
            })
            .catch((error) => {
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });


    };


    return (
        <>
            <Meta />
            <Head>
                <title>Contact | Ashok Seeds and Plants</title>
                <meta name="description" content="We are India's leading Seeds and Plants Provider. We are working to achieve sustainable development goals through tree planting." />

            </Head>
           
                <Header />

                <h3>Contact Page</h3>


                <Footer />
            
            <Js />
        </>
    )
}


export default Contact;