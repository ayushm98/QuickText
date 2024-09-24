import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-[#f7ce9d] text-start px-4 py-2 mb-2">
            <span>To: </span>
            <span className="font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-lg font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
};