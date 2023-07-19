import {Area} from "./Area";
import {Languages} from "./Languages";

export const SkillHighlights = () => {
    const areas =["Mathematics","Statistics","Data Visualization","Machine Learning","Deep Learning","NLP","Software Development"];

    return (
        <div className={"w-full"}>
            <h1 className={"text-2xl w-full text-white py-1"}>Areas</h1>

            <div className={"flex w-full justify-evenly"}>
                {areas.map((a) =>
                    <Area key={a} area={a}  />
                )}
            </div>
            <h1 className={"text-2xl text-white my-6"}>Languages,Libraries and Frameworks</h1>
            <div className={"flex w-full justify-evenly "}>
                <Languages/>
            </div>
        </div>
    )
}

