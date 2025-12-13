import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
        ...chatMessages, 
        {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
        }
        ]; 

        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
        ...newChatMessages, 
        {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
        }
        ]);

        setInputText(''); // Updates the input to be empty
    }

    return (
        <div className="chat-input-container">
        <input 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText} // Runs a function when we change the text inside an <input>
            value={inputText} // Updates the input to be empty
            className="chat-input"
        />
        <button 
            onClick={sendMessage}
            className="send-button">
            Send
        </button>
        </div>
    );
}
