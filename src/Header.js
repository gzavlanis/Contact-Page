import {AppBar, Toolbar, Typography, makeStyles, Button} from "@material-ui/core";
import React from "react";
import {Link as RouteLink} from 'react-router-dom';

const headersData= [
    {label: "Η ΕΤΑΙΡΕΙΑ", href: "/company",},
    {label: "ΠΡΟΪΟΝΤΑ", href: "/products",},
    {label: "ΛΟΓΑΡΙΑΣΜΟΣ", href: "/account",},
    {label: "ΕΠΙΚΟΙΝΩΝΙΑ", href: "./index",},
];

const useStyles= makeStyles(()=>({
    header: {backgroundColor: "#120632",},
    logo: {fontFamily: 'Work Sans, sans-serif', fontWeight: 600, color: '#FFFEFE', textAlign: 'left'},
    menuButton: {fontFamily: 'Open sans, sans-serif', fontWeight: 700, size: '20px', marginLeft: '40px'},
}));

export default function Header(){
    const {header, logo, menuButton}= useStyles();
    const displayDesktop= ()=> {
        return (<Toolbar>{EnerDataLogo}{getMenuButtons()}</Toolbar>);
    };
    const EnerDataLogo= (<Typography variant="h6" component="h1" className={logo}>EnerData Enterprise Solutions</Typography>);
    const getMenuButtons= ()=> {
        return headersData.map(({ label, href})=> {
            return(
                <Button{...{key: label, color: "inherit", to: href, component: RouteLink, className: menuButton}}>{label}</Button>
            );});
    };
    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}