
export const Blog=({props})=>{
    const handleClick = () => {
        window.location.replace('https://bobbyhadz.com');
    };
    return(
        <div onClick={ window.open('https://www.google.com', '_blank')} className={"border-solid border-2 border-teal-300 hover:scale-105 ransition duration-700"}>
            <div className="flex justify-center mt-5">
                <img src={props.img} className="w-[100px] h-[100px]"/>
            </div>
            <div>
                <h1 className={"text-white text-[20px] m-5"}>{props.title}</h1>
            </div>
            <div>
                <p className={"text-white align-center m-5"}>
                    <a href={props.link} target={"_blank"}>{props.desc.substring(0,150)}...</a></p>
            </div>
        </div>
    )
}