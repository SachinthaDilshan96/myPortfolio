import "./Right.css";
import {SkillHighlights} from "../components/SkillHighlights";
import {Experience} from "../components/Experience";
import {Projects} from "../components/Projects";
import {Education} from "../components/Education";
export const Right = () => {
    return (
        <div className={"right-container"}>
            <Education/>
            <SkillHighlights/>
            <Experience/>
            <Projects/>
        </div>
    )
}
