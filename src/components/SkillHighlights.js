import {Area} from "./Area";


export const SkillHighlights = () => {
    const areas =["Mathematics","Statistics","Data Visualization","Machine Learning","Deep Learning","NLP","Software Development"];
    return (
        <div>
            <h1 className={"text-2xl py-1"}>Areas</h1>
            <div className={"flex justify-between"}>
                {areas.map((a) =>
                    <Area key={a} area={a}  />
                )}
            </div>
        </div>
    )
}

