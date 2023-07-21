import {Language} from "./Language"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export const Languages=()=>{
    return(
       <div className={"flex w-full justify-evenly mx-2 "}>
           <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={3}>
                       <Language
                           props={{
                               language:"Python",
                               image:require("../resources/python.png"),
                               libraries:['Matplotlib','Pandas','Keras']
                           }}
                       />
                   </Grid>
                   <Grid item xs={12} md={3}>
                       <Language
                           props={{
                               language: "Java",
                               image: require("../resources/java.png"),
                               libraries: ['JavaFx']
                           }}
                       />
                   </Grid>
                   <Grid item xs={12} md={3}>
                       <Language
                           props={{
                               language: "Java Script",
                               image: require("../resources/js.png"),
                               libraries: ['Angualr', 'React']
                           }}
                       />
                   </Grid>
                   <Grid item xs={12} md={3}>
                       <Language
                           props={{
                               language: "SQL",
                               image: require("../resources/sql.png"),
                               libraries: ['MySql']
                           }}
                       />
                   </Grid>

                   <Grid item xs={12} md={3}>
                       <Language
                           props={{
                               language: "Version Controlling - GIT hub",
                               image: require("../resources/git.png"),
                               libraries: ['MySql']
                           }}
                       />
                   </Grid>
               </Grid>
           </Box>
       </div>
    )
}