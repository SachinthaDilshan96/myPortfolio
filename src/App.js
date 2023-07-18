import './App.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import {useState} from "react";
import {Education} from "./components/Education";


function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode?"dark":""}>
          <main className={"bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900"}>
              <section className={"min-h-screen py-10"}>
                  <nav className={"py-15 mb-12 flex justify-between"}>
                      <h1 className={"text-xl"}>Developed by Sachintha </h1>
                      <ul className={"flex items-center"}>
                          <li>
                              <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className={"cursor-pointer text-2xl dark:bg-white"}/>
                          </li>
                          <li>
                              <a className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-4  rounded-md ml-8"} href={"/"}>Resume</a>
                          </li>
                      </ul>
                  </nav>

                  <div className={"text-center p-10"}>
                      <h2 className={"text-5xl py-2 text-teal-600 font-medium"}>Sachintha Dilshan</h2>
                      <h3 className={"text-2xl py-2 dark:text-white"}>Software Engineer</h3>
                      <p className={"text-md py-5 leading-8 text-gray-800 dark:text-white"}>
                          I’m a self-motivated, forward-looking fresh graduate specialised in statistics and computer
                          science streams, from University of Colombo and University of Moratuwa. I’m very much
                          interested in software development, machine learning and data science domains. I do like
                          to explore new technologies and love learn while supporting others. I’m seeking for an
                          opportunity to prove my skills within the industry and improve my skills with the industry
                          knowledge.
                      </p>
                  </div>

                  <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}>
                      <AiFillTwitterCircle className={"dark:bg-white "}/>
                      <AiFillLinkedin/>
                      <AiFillGithub/>
                  </div>

                  <div className={"relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto"}>
                      <img  className={"m-auto object-cover"}  src={require("./resources/User.png")} alt={"user"}/>
                  </div>
              </section>

              <section>
                  <div>
                      <h3 className={"text-3xl py-1"}>Education</h3>
                      <div className={"flex gap-10 mx-auto justify-evenly bg-green-100"}>
                          <div className={"w-1/2 h-full"}>
                              <Education props={{degree: 'BSc. (Hon’s) in Statistics and Computer Science',uni:'University of Colombo',period:'(2018-2022)',logo:require('../src/resources/uoc.png')}}/>
                          </div>
                          <div className={"w-1/2 h-full"}>
                              <Education props={{degree: 'BIT (External)',uni:'University of Moratuwa',period:'(2018-2021)',logo:require('../src/resources/moratuwa.png')}}/>
                          </div>
                      </div>
                  </div>
              </section>

              <section>
                  <div>
                      <h3 className={"text-3xl py-1"}>Experience</h3>
                      <h3 className={"experience-title"}>Trainee Software Engineer - LSEG (Oct 2022 - April 2023)</h3>
                      <p className={"experience-description"}>
                          I have worked at LSEG from October 2022 to April 2023 as a trainee software engineer. I
                          was exposed to java core, OOP concepts and data structures as a trainee. I
                          was assigned to develop an exchange system using java core and socket programming.
                          Further I could be able to participate some KT's regarding the architecture and the
                          frameworks used by the LSEG.
                      </p>
                  </div>
              </section>

              <section>
                  <div>
                      <h3 className={"text-3xl py-1"}>Skill Highlights</h3>
                  </div>
              </section>

              <section>
                  <div>
                      <h3 className={"text-3xl py-1"}>Projects</h3>
                      <div className={"flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"}>
                          <div className={"basis-1/4 flex-1"}>
                              <img  className={"m-auto rounded-lg object-cover"} width={'100%'} height={'100%'} layout={"responsive"} src={require("./resources/java.png")} alt={"user"}/>
                          </div>

                          <div className={"basis-1/4 flex-1"}>
                              <img  className={"m-auto rounded-lg object-cover"}width={'100%'}  height={'100%'} layout={"responsive"} src={require("./resources/java.png")} alt={"user"}/>
                          </div>

                          <div className={"basis-1/4 flex-1"}>
                              <img  className={"m-auto rounded-lg object-cover"} width={'100%'} height={'100%'} layout={"responsive"} src={require("./resources/java.png")} alt={"user"}/>
                          </div>

                          <div className={"basis-1/4 flex-1"}>
                              <img  className={"m-auto rounded-lg object-cover"} width={'100%'}  height={'100%'} layout={"responsive"} src={require("./resources/java.png")} alt={"user"}/>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
      </div>
  );
}

export default App;
