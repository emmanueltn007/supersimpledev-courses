import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  // State = data that is connected to the HTML
  // When we update this data, it will update the HTML
  const [chatMessages, setChatMessages] = useState([{
      message: 'hello Chatbot',
      sender: 'user',
      id: 'id1'
    },{
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
    },{
      message: 'can you get todays date?',
      sender: 'user',
      id: 'id3'
    },
    {
      message: 'Today is December 12',
      sender: 'robot',
      id: 'id4'
    }]);
  // const [chatMessage, setChatMessages] = array; // Shortcut for the next two lines, ARRAY DESTRUCTURING
  // const chatMessages = array[0]; // Current data
  // const setChatMessages = array[1]; // updater function
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
    </div>
  )
}

export default App;