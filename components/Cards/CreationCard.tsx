import { NoteForm } from "../Forms/NoteForm"

export default function CreationCard({noteSubmitAPI} : {noteSubmitAPI: (arg1: string, arg2: string, arg3: string) => void}){
    return(
        <>
            <div className="flex-col items-center w-[350px] h-[400px] bg-[#440707] px-2  rounded-2xl">
                <NoteForm noteSubmitAPI={noteSubmitAPI}/>
            </div>
        </>
    )
}