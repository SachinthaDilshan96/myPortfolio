export const Experience = ({props}) => {
    return (
        <div className={"my-2 p-2"}>
            <h3 className={"py-2 text-white font-bold"}>{props.title}</h3>
            <p className={"text-white"}>
                {props.description}
            </p>
        </div>
    )
}

