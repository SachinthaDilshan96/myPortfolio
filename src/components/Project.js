import {ProjectLanguage} from "./ProjectLanguage";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";


export const Project=({props})=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return(
        <div className={"border-solid h-[375px] border-2 border-orange-300 hover:bg-slate-800 hover:scale-110 transition duration-700"}>
            <div>
                <img src={props.image} className={"w-[100px] h-[100px] mx-auto my-2"} alt={"project"}/>
            </div>
            <div >
                <h2 className={"text-2xl text-white font-bold py-1"}>{props.title}</h2>
            </div>
            <hr/>
            <div  onClick={handleOpen}>
                <p className={"text-1xl text-white font-bold py-1"}>{props.description.substring(0,100)} <span className={"text-teal-600"}>see more...</span></p>
            </div>
            <div >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography  id="modal-modal-title" variant="h6" component="h2">
                           <p className={"text-2xl font-bold text-center"}>{props.title}</p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <p className={"text-center"}>{props.description}</p>
                        </Typography>
                        <div className={"flex"}>
                            <div className={"p-2"}><h2 className={""}>Links : &nbsp;</h2></div>
                            {
                                Object.keys(props.links).map((l)=>{
                                    return(
                                        <div className={"p-2 hover:bg-blue-300"}>
                                            <h2>
                                                <a className={"text-rose-600"} href={props.links[l]} target={"_blank"}>{l}</a>
                                            </h2>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h2 className={""}>Tags : &nbsp;</h2>
                        <div className={"justify-center"}>
                            <ProjectLanguage languages={props.languages} isAll={true}/>
                        </div>
                    </Box>
                </Modal>
            </div>
            <div className={"justify-start justify-center"}>
                <ProjectLanguage languages={props.languages} isAll={false}/>
            </div>
        </div>
    )
}