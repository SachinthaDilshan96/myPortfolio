import BarChartIcon from '@mui/icons-material/BarChart';
import FunctionsIcon from '@mui/icons-material/Functions';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import TranslateIcon from '@mui/icons-material/Translate';
import TerminalIcon from '@mui/icons-material/Terminal';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import "./SkillHighlights.css"
import {Grid} from "@mui/material";
export const SkillHighlights = () => {
    return (
        <div>
            <h1>Skill Highlights</h1>
            <hr/>
            <h3>Skill Areas</h3>

            <div className={"skill-container"}>
                <div className={""}>
                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <BarChartIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Statistics
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <PsychologyIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Machine Learning & Deep Learning
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <ArchitectureIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    UML Designing
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <TerminalIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Software Development
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </div>
                <div className={"right"}>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <FunctionsIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Mathematics
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <QueryStatsIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Data Visualisation and Analysis
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <LanguageIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Web development
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={"skill"}>
                        <Grid container spacing={1}>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <TranslateIcon/>
                            </Grid>
                            <Grid item  xs={10} sm={10} md={10} lg={10}>
                                <div className={"skill-name"}>
                                    Natural Language Processing
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <h3>Languages, Libraries and Frameworks</h3>
            <div className={"languages-container"}>
                <div className={"languages"}>
                    <div className={"language"}>
                        <img src={require("../resources/python.png")} className={"language-logo"}/>
                        <p>Python</p>
                    </div>

                    <div className={"language"}>
                        <img src={require("../resources/java.png")} className={"language-logo"}/>
                        <p>Java</p>
                    </div>

                    <div className={"language"}>
                        <img src={require("../resources/js.png")} className={"language-logo"}/>
                        <p>Java Script</p>
                    </div>

                    <div className={"language"}>
                        <img src={require("../resources/mysql.png")} className={"language-logo"}/>
                        <p>MySQL</p>
                    </div>

                    <div className={"language"}>
                        <img src={require("../resources/react.png")} className={"language-logo"}/>
                        <p>React</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
