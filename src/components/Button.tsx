import React, { useState } from 'react';
import { useCounter } from '../Context/Context'; // Importing the custom hook to access the context

// Interface defining the props for the Button component
interface MyButton {
    text: string | number;  // Button can accept either a string or a number as text
    onClick?: () => void;   // Optional onClick handler function
}

// Button component definition
const Button: React.FC<MyButton> = (props) => {
    const { text, onClick } = props; // Destructuring props
    const [count, setCount] = useState<number>(0); // State to track local button clicks
    const [value, setValue] = useState<string>(""); // State to store input field value

    // Handler for input field changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value); // Update state with input value
    };

    // Handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page refresh on form submit
        console.log("Form submitted with value:", value); // Log submitted value
    };

    // Accessing the context using the custom hook
    const context = useCounter();

    return (
        <div>
            {/* Button to increment context value */}
            <h1>
                <button onClick={() => context?.setValue(context?.value + 1)}>
                    usecontex {context?.value}
                </button>
            </h1>

            {/* Button with onClick handler passed from props */}
            <button onClick={onClick}>{text}</button>

            {/* Button to increment local count state */}
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>

            {/* Form for user input */}
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange} // Update state with input change
                    value={value}               // Controlled input field
                    type="text"
                    placeholder="Enter Your Name"
                />
                {/* Display the input value */}
                <h1>{value}</h1>
                <button type="submit">Submit</button> {/* Submit button */}
            </form>
        </div>
    );
};

export default Button; // Exporting the Button component for reuse
