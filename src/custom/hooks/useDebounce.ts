import { useEffect, useState } from "react";

export default function useDebounce(value,delay){
    const [debounceValue,setDebounceValue] = useState(values)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
        },delay) 

        return ()=>{
            clearTimeout(timer)
        }
    },[value,delay])

    return debounceValue
}