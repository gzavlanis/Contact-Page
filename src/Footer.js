import React from 'react';
import {Box, Container, Row, Column, FooterLink, Heading, Div, A, Icons} from './FooterStyles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer= ()=> {
    return(
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Γενικά</Heading>
                        <FooterLink href="#">Η εταιρία</FooterLink>
                        <FooterLink href="#">Πολιτική απορρήτου</FooterLink>
                        <FooterLink href="#">Όροι χρήσης</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Λογαριασμοί</Heading>
                        <FooterLink href="#">Ο λογαριασμός μου</FooterLink>
                        <FooterLink href="#">Συνεργάτες</FooterLink>
                        <FooterLink href="#">Δωροεπιταγές</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Πελάτες</Heading>
                        <FooterLink href="#">Επικοινωνία</FooterLink>
                        <FooterLink href="#">Χάρτης ιστοτόπου</FooterLink>
                        <FooterLink href="#">Συνεργάτες</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Blog</Heading>
                        <FooterLink href="#">Άρθρα</FooterLink>
                        <FooterLink href="#">Κριτικές</FooterLink>
                        <FooterLink href="#">Δημοσιεύσεις</FooterLink>
                    </Column>
                </Row>
            </Container>
            <Div>
                <h2 style={{color: '#6BD0FF', textAlign: 'center'}}>Ακολουθήστε μας και στα social</h2>
                <Icons>
                    <A href="https://www.facebook.com">
                        <FontAwesomeIcon icon={faFacebook} size='2x'/>
                    </A>
                    <A href="https://www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram} size='2x'/>
                    </A>
                    <A href="https://www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size='2x'/>
                    </A>
                    <A href="https://www.linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </A>
                </Icons>
            </Div>
            <h4 style={{color: 'white', textAlign: 'left'}}>Copyright 2021, George Zavlanis, all rights reserved</h4>
        </Box>
    );
};
export default Footer;