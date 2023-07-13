import "./Introduction.css"
export const Introduction = () => {
    return (
        <div className={"main-div"}>
           <img className={"user-image"} src={require("../resources/User.png")} alt={"user"}/>
            <h1>Sachintha Dilshan</h1>
            <h4>Software Engineer</h4>
            <p className={'introduction-para'}><span className={"quotes"}> " </span>
                I’m a self-motivated, forward-looking fresh graduate specialised in statistics and computer
                science streams, from University of Colombo and University of Moratuwa. I’m very much
                interested in software development, machine learning and data science domains. I do like
                to explore new technologies and love learn while supporting others. I’m seeking for an
                opportunity to prove my skills within the industry and improve my skills with the industry
                knowledge. <span className={"quotes"}> " </span></p>
            <ul className={"links"}>
                <li>
                    <a href={""}>Skill Highlights</a>
                </li>
                <li>
                    <a href={""}>Experience</a>
                </li>
                <li>
                    <a href={""}>Projects</a>
                </li>
            </ul>
        </div>
    )
}
