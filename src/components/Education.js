export const Education = ({props}) => {
    return (
        <div>
            <div className={"text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white"}>
                <img src={props.logo}/>
                <h3 className={"text-md py-2 leading-8 text-gray-800"}>{props.degree}</h3>
                <h4>{props.uni}</h4>
                <h5>{props.period}</h5>
            </div>
        </div>
    )
}
