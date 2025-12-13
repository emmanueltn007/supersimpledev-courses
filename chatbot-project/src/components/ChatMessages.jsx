import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';


function ChatMessages({
    chatMessages }) { 
      // lets us automatically save an HTML element from the component
      // the initial value is null
      const chatMessagesRef = useRef(null); 

      // hooks are always at the top of the function
      // code for automatic scrolling when the screen is full
      useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
          containerElem.scrollTop = containerElem.scrollHeight;
        }
      }, [chatMessages]); // the array controls when useEffect runs, an empty array runs once, after the component is created

      return (
        <div className="chat-messages-container"
          ref={chatMessagesRef}>
          {chatMessages.map((chatMessage) => {
            return (
              <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            );
          })}
        </div>
      );
  }

  export default ChatMessages;