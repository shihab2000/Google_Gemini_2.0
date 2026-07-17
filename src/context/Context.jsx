import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context=createContext();
const ContextProvider=(props)=>{

    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const [prevPrompts,setprevPrompts]=useState([]);
    const [showResult,setshowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("")

    const onSent=async(prompt)=>{
      await  runChat(prompt)
    }
    
    const ContextValue={

    }
    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default Context