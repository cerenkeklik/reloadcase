import LeftChat from "../components/chat/LeftChat";
import RightChat from "../components/chat/RightChat";
import "../assets/css/General.css";
import "../assets/css/Chat.css";

const Chat = () => {
    return(
        <div className="chat-container">
            <LeftChat />
            <RightChat />
        </div>
    )
}
export default Chat;