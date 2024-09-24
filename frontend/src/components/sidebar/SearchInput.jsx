import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    console.log(search)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!")

    }

    return (
        <form onClick={handleSubmit} className="flex items-center gap-2">
            <input type="text" placeholder="Search..." className="w-full h-10 py-1 px-4 border-2 bg-slate-200 rounded-full" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="bg-primaryColor hover:bg-[#dfab6c] rounded-full p-2 ">
                <IoSearchOutline className="w-5 h-5 cursor-pointer"/>
            </button>
        </form>
    )
}

export default SearchInput