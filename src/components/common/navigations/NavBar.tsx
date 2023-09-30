import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import PSALogo from "../../../assets/logo/psa.png";

const NavBar: React.FC = () => {
    return (
        <AppBar sx={{ bgcolor: "#000" }} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img height="40px" src={PSALogo} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
