import{ useEffect, useState } from 'react'

function useCountDown() {
    const [timeLeft,setTimeLeft] = useState(0)

    useEffect(()=>{
        if(timeLeft <= 0) return

        const timeOut = setTimeout(()=>{
            setTimeLeft(timeLeft - 1)
        },1000)

        return ()=> clearTimeout(timeOut)
    },[timeLeft])

    function startCountDown(time:number){
        setTimeLeft(time)
    }
  return {timeLeft, startCountDown}
}



export default useCountDown