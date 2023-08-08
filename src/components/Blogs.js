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
                        title: 'Types of Variables in Java',
                        link:"https://medium.com/@sachinthadilshan96/types-of-variables-in-java-4c0ad2d7f6ee",
                        img:require("../resources/java.png"),
                        desc:'Types of variables and data types are two different things in java. In this article I’ll be explaining the types'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Blog props={{
                        title: 'Types of Variables in Java',
                        link:"https://medium.com/@sachinthadilshan96/data-types-in-java-d92b4bb83f2e",
                        img:require("../resources/java.png"),
                        desc:'Java is a strongly typed and statically typed language. Which means conversions between unrelated data types are not allowed and type checking are done'}}/>
                </Grid>
            </Grid>
        </Box>
    )
}