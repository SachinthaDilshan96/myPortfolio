import './App.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import {useState} from "react";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {SkillHighlights} from "./components/SkillHighlights";
import {Project} from "./components/Project";
import {BsStackOverflow} from "react-icons/bs"
import {FaKaggle} from "react-icons/fa"
import {MdEmail} from "react-icons/md";
import Typewriter from "typewriter-effect";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const download=()=>{
    fetch('./resources/SachinthaDilshan_CV.pdf')
        .then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SachinthaDilshan_CV.pdf';
        alink.click();
      })
    })
  }
  return (
      <div className={""}>
        <main className={"bg-black px-10 md:px-20 lg:px-40 "}>
          <section className={"min-h-screen py-10"}>
            <nav className={"py-15 mb-12 flex justify-between"}>
              <h1 className={"text-xl text-white"}>Developed by Sachintha Dilshan</h1>
              <ul className={"flex items-center"}>
                <li>
                  <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className={"cursor-pointer text-2xl "}/>
                </li>
                <li>
                  <a onClick={download} className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-4  rounded-md ml-8"} href={"/"}>Download Resume</a>
                </li>
              </ul>
            </nav>

            <div className={"text-center p-10"}>
              <h2 className={"text-5xl py-2 text-teal-600 font-medium"}>Sachintha Dilshan</h2>
              <h3 className={"text-2xl py-2 text-white"}>Software Engineer</h3>
              <p className={"text-md py-5 leading-8 text-white "}>
                I’m a self-motivated, forward-looking fresh graduate specialised in statistics and computer
                science streams, from University of Colombo and University of Moratuwa. I’m very much
                interested in software development, machine learning and data science domains. I do like
                to explore new technologies and love learn while supporting others. I’m seeking for an
                opportunity to prove my skills within the industry and improve my skills with
                <Typewriter
                    options={{
                      strings: ['the industry knowledge.'],
                      autoStart: true,
                      loop: true,
                      pauseFor:1000
                    }}
              />
              </p>
            </div>

            <div className={"text-5xl flex justify-center align-middle gap-16 py-3 text-white"}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2} md={2}>
                    <a href={"mailto:sachinthadilshan96@gmail.com"} target={"_blank"}>
                      <MdEmail className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>

                  <Grid item xs={2} md={2}>
                    <a href={"https://twitter.com/Sachinthadil96"} target={"_blank"}>
                      <AiFillTwitterCircle className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>

                  <Grid item xs={2} md={2}>
                    <a href={"https://www.linkedin.com/in/sachintha-dilshan96/"} target={"_blank"}>
                      <AiFillLinkedin className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>

                  <Grid item xs={2} md={2}>
                    <a href={"https://github.com/SachinthaDilshan96"} target={"_blank"}>
                      <AiFillGithub className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>

                  <Grid item xs={2} md={2}>
                    <a href={"https://stackoverflow.com/users/17039223/sachintha-dilshan"} target={"_blank"}>
                      <BsStackOverflow className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>

                  <Grid item xs={2} md={2}>
                    <a href={"https://www.kaggle.com/sachinthadilshan"} target={"_blank"}>
                      <FaKaggle className={"hover:cursor-pointer hover:scale-125 transition duration-700 "}/>
                    </a>
                  </Grid>
                </Grid>
              </Box>
            </div>

            <div className={"relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto"}>
              <img  className={"m-auto object-cover"}  src={require("./resources/User.png")} alt={"user"}/>
            </div>
          </section>

          <section>
            <div className={"text-center"}>
              <h3 className={"text-3xl py-1 text-white"}>Education</h3>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Education props={{degree: 'BSc. (Hon’s) in Statistics and Computer Science',uni:'University of Colombo',period:'(2018-2022)',logo:require('../src/resources/uoc.png')}}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Education props={{degree: 'BIT (External)',uni:'University of Moratuwa',period:'(2018-2021)',logo:require('../src/resources/moratuwa.png')}}/>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Education props={{degree: 'Comprehensive Master Java Developer Course',uni:'IJSE',period:'(2023)',logo:require('../src/resources/ijse.png')}}/>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </section>

          <section className={"w-full"}>
            <div className={"text-center  w-full"}>
              <h3 className={"text-3xl text-white py-1"}>Skill Highlights</h3>
              <div className={"w-full"}>
                <SkillHighlights/>
              </div>
            </div>
          </section>

          <section>
            <div className={"text-center my-4"}>
              <h3 className={"text-3xl text-white py-1"}> Experiences</h3>
              <div className={"my-5"}>
                <Experience/>
              </div>
            </div>
          </section>

          <section>
            <div className={"text-center"}>
              <h3 className={"text-3xl text-white py-1"}>Projects</h3>
              <div className={"flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"}>
                <div className={"basis-1/4 flex-1"}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"Construct an AI based stock market index – Final year\n" +
                              "Research (UoC)",
                          image:require("./resources/python.png"),
                          languages:['Python','Matplolib','Keras','NLP','DeepLearning'],
                          description:'A new stock market index for the CSE was constructed using AI based techniques\n' +
                              'such as NLP, sentiment analysis and neural networks. The new index was free float\n' +
                              'adjusted to better reflect the stock market behaviour. The Python was used as the\n' +
                              'programming language. This research has been published on SLAAS Annual\n' +
                              'sessions 2022',
                          links:{
                            "GIT Repo":"https://github.com/SachinthaDilshan96/AIBasedStockMarketIndex.git",
                          "SLAAS Annual Journal": "https://www.slaas.lk/images/annual_sessions/proceedings/Part_I_Abstracts_2022_SLAAS.pdf"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"A Web platform with multiple online Tools – Tools Master",
                          image:require("./resources/react.png"),
                          languages:['React','JS','Tailwind CSS','NLP','API'],
                          description:"This project was developed based on my own idea. Tools Master is a free online platform with " +
                              "multiple online tools. At the moment it consists with multiple video downloaders, paraphrasing tool and a summarization tool. All these are API based tools and platform was developed using React and tailwind CSS.",
                          links:{
                            "GIT Repo":"https://github.com/SachinthaDilshan96/ToolsMaster.git","Site Link":"https://toolsmasteronline.com/"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"MyShopApp - A simple customer management System",
                          image:require("./resources/java.png"),
                          languages:['Java','JavaFX','MySql','OOP','Layered Architecture','JDBC'],
                          description:"This project was implemented using Java and MySql database. The System's UI was developed using JavaFX and MySql " +
                              "was used as the database. OOP concepts and SOLID principles were applied where necessary. Layered architecture was used in " +
                              "the project and CRUD operations for customers, items and users were implemented using JDBC.",
                          links:{
                            "GIT Repo":"https://github.com/SachinthaDilshan96/MyShopApp"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"Predicting COVID-19 using ML and implement it as a mobile app.",
                          image:require("./resources/python.png"),
                          languages:['JS','ReactNative','Python','ML','MobileApp'],
                          description:'Symptoms and COVID Presence data set was used to predict the presence of\n' +
                              'COVID19 using ML. Python language was used to construct the model and\n' +
                              'practically implemented it using a mobile app which was developed using reactnative.\n' +
                              'SVM, RF, ANN and XGB algorithms were used to model the dataset and XGB\n' +
                              'could predict the presence of COVID19 around 90% of success.',
                          links:{
                          "Data Set":"https://www.kaggle.com/datasets/hemanthhari/symptoms-and-covid-presence",
                            "GIT Repo":"https://github.com/SachinthaDilshan96/PredictingCovidUsingML.git",
                            "Kaggle Notebook":"https://www.kaggle.com/code/sachinthadilshan/notebookcb7e0a5759/notebook",
                          "Mobile App":"https://SachinthaDilshan96@bitbucket.org/SachinthaDilshan96/symptomate/src/master/"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"Heart disease prediction using ML",
                          image:require("./resources/python.png"),
                          languages:['Python','Machine Learning','Classification'],
                          description:'The Cardiovascular dataset was used to predict the heart disease using ML. Logistic\n' +
                              'regression, RF, XGB and DT were used to model the dataset. Python Language was\n' +
                              'used for the project and could achieve an accuracy around 90%.',
                          links:{
                          "Kaggle Notebook":"https://www.kaggle.com/code/sachinthadilshan/notebookca443ee6a4"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"Predicting True value of cars",
                          image:require("./resources/python.png"),
                          languages:['Python','Machine Learning','Regression'],
                          description:'A data set with car options and prices was used to construct a ML model to predict\n' +
                              'the price of a used car. Linear regression, RF and many other models were used and\n' +
                              'the lowest RSS was given by RF.',
                          links:{
                          "Kaggle Notebook":"https://www.kaggle.com/code/sachinthadilshan/notebookdd591de8c1/data"},
                        }}/>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Project props={{
                          title:"Predict Potential Spammers on Fiverr (Kaggle Competition)",
                          image:require("./resources/python.png"),
                          languages:['Python','Machine Learning','Kaglle Competition'],
                          description:'This project was done as submission for the Kaggle Competition of Predict Potential\n' +
                              'Spammers on Fiverr. Random Forest and XGB Classifier were used to predict the\n' +
                              'spam behavior and 98% score could be achieved for the final submission. My\n' +
                              'submission was ranked for 87th place from all the competitors around the world.',
                          links:{
                          "Kaggle Notebook":"https://www.kaggle.com/competitions/predict-potential-spammers-on-fiverr"},
                        }}/>
                      </Grid>

                    </Grid>
                  </Box>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={"text-center my-4"}>
              <h3 className={"text-3xl text-white py-1"}> Blog Article</h3>
              <div className={"my-5"}>
                fhfhf
              </div>
            </div>
          </section>


        </main>
      </div>
  );
}

export default App;
