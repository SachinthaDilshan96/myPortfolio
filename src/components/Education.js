export const Education = ({props}) => {
    return (
        <div className={"h-[350px] hover:scale-105 ransition duration-700"}>
            <div className={"text-center h-[300px] bg-teal-700 shadow-lg p-10 rounded-xl my-10"}>
                <img className={"h-20 mx-auto"} src={props.logo}/>
                <h3 className={"text-md py-2 leading-8 text-white"}>{props.degree}</h3>
                <h4 className={"text-md leading-8 text-white"}>{props.uni}</h4>
                <h5 className={"text-md leading-8 text-white"}>{props.period}</h5>
            </div>
        </div>
    )
}
