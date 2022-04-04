import { useCounter } from "../../hooks/useCounter"
import './counter.css'


export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset} = useCounter (100)

    return (
    <>
        <h1>Counter {state}</h1>
        <hr />

        <button onClick={ () => increment(2)}> +1 </button>
        <button onClick={ reset }> Reset </button>
        <button onClick={ () => decrement(2)}> -1 </button>
    </>
  )
}
