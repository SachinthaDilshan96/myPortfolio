import {Library} from "./Library";

export const Language=({props})=>{
    return(
       <div className={"border-solid border-2 border-sky-500"}>
           <div>
               <img src={props.image} className={"w-[100px] h-[100px] mx-auto my-2"} alt={"language"}/>
           </div>
           <div >
               <h2 className={"text-2xl text-white font-bold py-1"}>{props.language}</h2>
           </div>
           <hr/>
           <div className={"justify-center"}>
               <Library libs={props.libraries}/>
           </div>
       </div>
    )
}