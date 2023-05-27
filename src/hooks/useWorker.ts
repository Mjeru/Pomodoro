import { useEffect, useRef, useState } from 'react'

const workerHandler = () => {
    let timerContainer : any  = 0
    onmessage = (event) =>{
        switch (event.data){
            case 'start' :{
                postMessage('tick')
                timerContainer = setInterval(()=>{
                    postMessage('tick')
                },1000)
            }   break
            case 'pause' :{
                clearInterval(timerContainer)
            }   break
            case 'stop' : {
                clearInterval(timerContainer)
                break
            }
        }
    }
}

export const useWebworker = () =>{
    const [result, setResult] = useState(0 )
    const workerRef = useRef<Worker | null>(null)
    useEffect(()=>{
        const worker = new Worker(
            URL.createObjectURL(new Blob([`(${workerHandler})()`]))
        )
        workerRef.current = worker
        worker.onmessage = () => setResult(result => result+1)
        return ()=>{
            worker.terminate()
        }
    },[])
    return {
        result,
        run: (value:any) => workerRef.current?.postMessage(value)
    }
}
