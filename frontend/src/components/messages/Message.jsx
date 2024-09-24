import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._Id;
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shoulShake ? "shake" : "";

    return (
        <div className="flex w-full flex-col gap-4 py-2">
            {fromMe ? (
                <div className="flex items-end gap-2">
                    <span className="mr-auto text-xs">{formattedTime}</span>
                    <div className={`ml-auto flex max-w-[70%] flex-col gap-2 rounded-l-xl rounded-tr-xl bg-[#ffe4b5] p-4 text-sm text-black md:max-w-[60%] ${shakeClass}`}>
                        {message.message}
                    </div>
                    <img className="size-8 rounded-full object-cover" src={profilePic} alt="avatar" />
                </div>


            ) : (
                <div className="flex items-end gap-2 ">
                    
                    <div className="mr-auto flex max-w-[70%] flex-col gap-2 rounded-r-md rounded-tl-md bg-neutral-100 p-4 text-neutral-600 md:max-w-[60%] ">
                        <div className={`text-sm ${shakeClass}`}>
                            {message.message}
                        </div>
                    </div>
                    <span className="ml-auto text-xs">{formattedTime}</span>
                </div>
            )}

        </div>
        
    )
}

export default Message

