
export const Area=({area})=>{
    return(
        <div className={"flex justify-center items-center bg-orange-700 mx-1 hover:scale-110 transition duration-700 my-2 hover:bg-sky-700 rounded-lg w-[150px] h-[50px] p-2 text-white"}>
            <p className={"justify-center items-center"}>{area}</p>
        </div>
    );
}