

export const Library=({languages})=>{
    const colors = ["bg-lime-600","bg-red-600","bg-orange-600","bg-amber-700",];
    return(
        <div className={"flex justify-center"}>
            {languages.map((a,index) =>
                <div className={`flex justify-center items-center ${colors[index]} mx-1 hover:scale-110 transition duration-700 my-2 hover:bg-sky-700 rounded-lg w-[150px] p-2 text-white`}>
                    <p className={"justify-center items-center"}>{a}</p>
                </div>
            )}
        </div>
    )
}