import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../store/useConversation";


const Conversation = ({ conversation, lastIndex, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            <div className={`flex gap-2 hover:bg-primaryColor items-center p-2 cursor-pointer 
                    ${isSelected ? "bg-primaryColor" : ""}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div>
                    <div className="relative w-12 rounded-full">
                        
                        
                        
                        {isOnline && (
                            <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-3">
                        <p className="font-bold ">{conversation.fullName}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIndex && <hr />}
        </>
    )
}

export default Conversation