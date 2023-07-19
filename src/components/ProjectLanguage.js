

export const ProjectLanguage=({languages,isAll})=>{
    const colors = ["bg-lime-600","bg-red-600","bg-orange-600","bg-amber-600","bg-neutral-900"];
    if (isAll) {
        return(
            <div className={"flex justify-center"}>
                {languages.map((a,index) =>
                    <div key={index}
                         className={`flex justify-center items-center ${colors[index]} mx-1 hover:scale-110 transition duration-700 my-2 hover:bg-sky-700 rounded-lg w-[150px] p-2 text-white`}>
                        <p className={"justify-center items-center"}>{a}</p>
                    </div>

                )}
            </div>
        )
    }else{
        return(
            <div className={"flex justify-center"}>
                    <div
                         className={`flex justify-center items-center ${colors[0]} mx-1 hover:scale-110 transition duration-700 my-2 hover:bg-sky-700 rounded-lg w-[150px] p-2 text-white`}>
                        <p className={"justify-center items-center"}>{languages[0]}</p>
                    </div>
                <div
                     className={`flex justify-center items-center ${colors[1]} mx-1 hover:scale-110 transition duration-700 my-2 hover:bg-sky-700 rounded-lg w-[150px] p-2 text-white`}>
                    <p className={"justify-center items-center"}>{languages[1]}</p>
                </div>

            </div>
        )
    }

}