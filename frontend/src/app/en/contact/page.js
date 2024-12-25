'use client'
import { Container, Row, Col } from 'react-bootstrap';
import contactStyle from './contact.module.css'
import { submitContactForm } from '@/utilities/services/contact/service';
import { contactResource } from '@/utilities/resources/en';
import { contactResourceSn } from '@/utilities/resources/sn';
import { useState } from 'react';

export default function Contact({ language = "en" }) {
    let languageResourceObject = language === "en" ? contactResource : contactResourceSn;
    return (
        <main>
            <Container>
                <h1 id={`${contactStyle.headerText}`}>{languageResourceObject.statementMessage}</h1>
                <Row id={`${contactStyle.cont}`}>
                    <Col xs={12} md={6}>
                        <ContactColumn languageResource={languageResourceObject} />
                    </Col>
                    <Col xs={12} md={6}>
                        <FormColumn languageResource={languageResourceObject} />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

function ContactColumn({ languageResource }) {
    return (
        <>
            <Row>
                <h2>{languageResource.contactMe}</h2>
                <span>{languageResource.contactText}</span>
            </Row>
            <Row className={`${contactStyle.contactImagesCont}`}>
                <div title="Tinotenda Chingwena's Facebook page" aria-label="Opens Tinotenda Chingwena's facebook page" href="https://www.facebook.com/tchingwena1" target="_blank">
                    <img src="/socialMedia/facebook.svg" alt="Facebook Logo" />
                    <span>Tinotenda Chingwena</span>
                </div>
                <div title="Tinotenda Chingwena's LinkedIn page" aria-label="Opens Tinotenda Chingwena's LinkedIn page"
                    href="http://www.linkedin.com/in/tinotenda-chingwena-6034a6211" target="_blank">
                    <img src="/socialMedia/linkedin.svg" alt="Linkedin Logo" />
                    <span>Tinotenda Chingwena</span>
                </div>
                <div title="Tinotenda Chingwena's Github page" aria-label="Opens Tinotenda Chingwena's GitHub page" href="https://github.com/tinochings" target="_blank">
                    <img src="/socialMedia/githublogo.svg" alt="Github Logo" />
                    <span>Tinochings</span>
                </div>
            </Row>
        </>
    );
}

function FormColumn({ languageResource }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onNameChange = (nameToSet) => {
        if (nameToSet.target.value !== name)
            setName(nameToSet.target.value);
    }
    const onEmailChange = (emailToSet) => {
        if (emailToSet.target.value !== email)
            setEmail(emailToSet.target.value);
    }
    const onMessageChange = (messageToSet) => {
        if (messageToSet.target.value !== message)
            setMessage(messageToSet.target.value);
    }
    return (
        <form id={`${contactStyle.contactForm}`} onSubmit={submitContactForm} acceptCharset='UTF-8' method='post'>
            <div className={`${contactStyle.inputContainer}`}>
                <label htmlFor='name'>{languageResource.nameLabel}</label>
                <input onChange={onNameChange} aria-required={true} value={name} autoComplete='name' id='name' type='text' required></input>
            </div>
            <div className={`${contactStyle.inputContainer}`}>
                <label htmlFor='email'>{languageResource.emailLabel}</label>
                <input onChange={onEmailChange} aria-required={true} autoComplete='email' id='email' type='email' value={email} required></input>
            </div>
            <div className={`${contactStyle.inputContainer}`}>
                <label htmlFor='message'>{languageResource.messageLabel}</label>
                <textarea onChange={onMessageChange} aria-required={true} id='message' value={message} required></textarea>
            </div>
            <div className={`${contactStyle.inputContainer}`}>
                <input className={`${contactStyle.submitButton}`} role='button' type='submit' value={"SEND"}></input>
            </div>

        </form>
    );
}