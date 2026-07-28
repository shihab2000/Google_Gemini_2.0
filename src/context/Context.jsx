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
      setResultData("")
      setLoading(true)
      setshowResult(true)
      setRecentPrompt(input)
      const response= await  runChat(input)
      setResultData(response)
      setLoading(false)
      setInput(false)
      
    }
    
    const ContextValue={
        prevPrompts,
        setprevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default Context