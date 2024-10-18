import React, { useState } from 'react';
import { useCounter } from '../Context/Context';

interface MyButton {
    text: string | number; 
    onClick?: () => void;
}

const Button: React.FC<MyButton> = (props) => {
    const { text, onClick } = props; 
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with value:", value );
    };

    const context = useCounter()
    return (
        <div>
            <h1> <button onClick={()=>{context?.setValue(context?.value+1)}}>usecontex {context?.value}</button></h1>
            <button onClick={onClick}>{text}</button>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleNameChange} 
                    value={value} 
                    type="text" 
                    placeholder="Enter Your Name" 
                />
                <h1>{value}</h1>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Button;
