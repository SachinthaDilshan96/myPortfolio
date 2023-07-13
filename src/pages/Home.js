import {Box, Grid} from "@mui/material";
import "./Home.css";
import {Introduction} from "../components/Introduction";
import {Left} from "./Left";
import {Right} from "./Right";
import {useEffect, useState} from "react";
const Home = () => {
    const [mousePos, setMousePos] = useState({});
    const element = document.getElementsByClassName("main-div");

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    return (
        <div className={"main-div"}>
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <div className={"left"}>
                            <Left/>
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={4} md={8} lg={8}>
                        <div className={"right"}>
                            <Right/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;