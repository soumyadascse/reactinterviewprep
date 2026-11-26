
import { useState } from 'react';

export default function PracticeQuestionsHooks() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "red"
    });
    const changeColor = () => {
        setCar((car) => {
            return { ...car, color: "blue" };
        });
    }
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount((prev) => prev + 4);
        // update the counter by 4

    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Hooks related Hands On</h1>

            <h2>My {car.brand}</h2>
            <h2>It is a {car.color} {car.model} from {car.year}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeColor}>Blue</button>
            <h1>Count: {count}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increaseCount}>Increment</button>
        </>
    )
}