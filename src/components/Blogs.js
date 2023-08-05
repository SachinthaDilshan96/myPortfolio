import {Blog} from "./Blog"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export const Blogs = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Blog props={{
                        title: 'Introduction to Java',
                        link:"https://medium.com/@sachinthadilshan96/java-2358e56d56de",
                        img:require("../resources/java.png"),
                        desc:'Java Introduction Java is a high level programming language developed by James Gosling at Sun Microsystems in 1995. Java is a general purpose, class based, '}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Blog props={{
                        title: 'Introduction to Java',
                        link:"https://medium.com/@sachinthadilshan96/java-2358e56d56de",
                        img:require("../resources/java.png"),
                        desc:'Java Introduction Java is a high level programming language developed by James Gosling at Sun Microsystems in 1995. Java is a general purpose, class based, '}}/>
                </Grid>
            </Grid>
        </Box>
    )
}