import "./Right.css";
import {SkillHighlights} from "../components/SkillHighlights";
import {Experience} from "../components/Experience";
import {Projects} from "../components/Projects";
export const Right = () => {
    return (
        <div className={"right-container"}>
            <SkillHighlights/>
            <Experience/>
            <Projects/>
        </div>
    )
}
