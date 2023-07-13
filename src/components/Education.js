import "./Education.css";


export const Education = () => {
    return (
        <div>
            <h1>Education</h1>
            <hr/>
            <div className={"education-container"}>
                <div className={"education"}>
                    <ul>
                        <li>
                            <h3>BSc. (Hon’s) in Statistics and Computer Science</h3>
                            <h4>University of Colombo.</h4>
                            <h5>(2018-2022)</h5>
                        </li>
                    </ul>
                </div>
                <div className={"education"}>
                    <ul>
                        <li>
                            <h3>BIT (External)</h3>
                            <h4>University of Moratuwa..</h4>
                            <h5>(2018-2021)</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>
    )
}
