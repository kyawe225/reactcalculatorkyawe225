import {useState} from 'react';

export function Counter() {
    const [count,setCount]=useState(0);

    function increment(e){
        console.log(e)
        setCount(count+1)
    }

    return (
        <div>
            Hello world {count}
            <button onClick={increment}>COUNT</button>
        </div>
    );
}