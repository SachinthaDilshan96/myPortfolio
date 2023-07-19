import {Language} from "./Language"

export const Languages=()=>{
    return(
       <div className={"flex w-full justify-evenly mx-2 "}>
            <div className={"w-[250px] mx-2 hover:bg-teal-600 hover:scale-110 transition duration-700"}>
                <Language
                    props={{
                        language:"Python",
                        image:require("../resources/python.png"),
                        libraries:['Matplotlib','Pandas','Keras']
                    }}
                />
            </div>

           <div className={"w-[250px] mx-2 hover:bg-teal-600 hover:scale-110 transition duration-700"}>
               <Language
                   props={{
                       language:"Java",
                       image:require("../resources/java.png"),
                       libraries:['JavaFx']
                   }}
               />
           </div>

           <div className={"w-[250px] mx-2 hover:bg-teal-600 hover:scale-110 transition duration-700"}>
               <Language
                   props={{
                       language:"Java Script",
                       image:require("../resources/js.png"),
                       libraries:['Angualr','React']
                   }}
               />
           </div>

           <div className={"w-[250px] mx-2 hover:bg-teal-600 hover:scale-110 transition duration-700"}>
               <Language
                   props={{
                       language:"SQL",
                       image:require("../resources/sql.png"),
                       libraries:['MySql']
                   }}
               />
           </div>

       </div>
    )
}