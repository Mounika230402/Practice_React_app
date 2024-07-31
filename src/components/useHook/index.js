import useHook from "./useHook"

const CustomHook=()=>{
    const [Count,Increment,Decrement]=useHook(1,1)
    const [Age,IncrementAge,DecrementAge]=useHook(100,10)
    return(
        <>
        <h1>Count:{Count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <h1>Count:{Age}</h1>
        <button onClick={IncrementAge}>Increment</button>
        <button onClick={DecrementAge}>Decrement</button>
        </>
    )

}
export default CustomHook