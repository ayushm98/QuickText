
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import LoadingSpinner from "../loading/LoadingSpinner";
import Conversation from "./Conversation"

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-x-hidden">

      {conversations.map((conversation, index) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length-1}
        />
      ))}

      {loading ? <LoadingSpinner /> : null}
    </div>
  )
}

export default Conversations