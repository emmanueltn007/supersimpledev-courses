import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) { // shortcut for the 3 lines below
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props; //shortcut for the two lines above

    /*
    // there's a shortcut below for this if statement, it is called a guard operator
    if (sender === 'robot') {
        return (
            <div>
                <img width="50" src="robot.png" />
                {message}
            </div>
        );
    }
    */

    return (
        <div className={
        sender === 'user' //condition
            ? 'chat-message-user' // if-statement
            : 'chat-message-robot' // else-statement
        }>
        {sender === 'robot' && (
            <img 
            src={RobotProfileImage}
            className="chat-message-profile" 
            />
        )} 
        <div className="chat-message-text">
            {message}
        </div>
        {sender === 'user' && (
            <img 
            src={UserProfileImage}
            className="chat-message-profile"
            />
        )}
        </div>
    )
}