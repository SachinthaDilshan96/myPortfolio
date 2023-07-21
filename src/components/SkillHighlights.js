import {Area} from "./Area";
import {Languages} from "./Languages";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export const SkillHighlights = () => {
    const areas =["Mathematics","Statistics","Data Visualization","Machine Learning","Deep Learning","NLP","Software Development","Data Base","Version Controlling"];

    return (
        <div className={"w-full"}>
            <h1 className={"text-2xl w-full text-white py-1"}>Areas</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {areas.map((a) =>
                        <Grid item xs={3} md={3} lg={2}>
                        <Area key={a} area={a}  />
                        </Grid>
                    )}
                </Grid>
            </Box>

            <h1 className={"text-2xl text-white my-6"}>Languages,Libraries and Frameworks</h1>
            <div className={"flex w-full justify-evenly "}>
                <Languages/>
            </div>
        </div>
    )
}

