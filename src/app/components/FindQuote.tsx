'use client'

import {SetStateAction, useState} from "react";
import jsonData from "@/app/quotes.json";

type Props = {
    Quote: string
    Author: string
    Tags: Array<string>
    Popularity: number
    Category: string
}
export default function FindQuote() {
    const [quote, setQuote] = useState('');
    const [userInput, setUserInput] = useState('');
    const listOfQuotes: Props[] = jsonData

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        const listOfQuotesBasedOnUserInput = listOfQuotes.filter(detail => detail.Tags.map(tag => tag.toLowerCase()).includes(userInput.toLowerCase()));
        if (userInput && listOfQuotesBasedOnUserInput.length > 0) {
            const randomNum = Math.floor(Math.random() * listOfQuotesBasedOnUserInput.length)
            const quoteFound = listOfQuotesBasedOnUserInput[randomNum]['Quote']
            setQuote(quoteFound)
        } else {
            setQuote("Oops! We couldn't find any results for that. Please try again with a different search term")
        }
    }
    return (
        <div className="items-center justify-items-center">
            <p className="mt-1 text-lg">Find as many quotes as you want with only one click!</p>
            <div
                className="items-center justify-items-center p-2 font-[family-name:var(--font-geist-sans)] m-6 text-2xl">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type a feeling or word to find a quote…"
                    style={styles.input}
                />
                <button onClick={handleSubmit} style={styles.button}>Find Quote</button>
            </div>
            {quote ? <div className="items-center justify-items-center p-2 m-6 bg-white rounded-md shadow-sm">
                {quote}
            </div> : <div></div>}

        </div>
    )

}
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center'
    },
    input: {
        padding: '8px',
        fontSize: '16px',
        width: '100%',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#062438',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
        marginBottom: '20px',
    }
};