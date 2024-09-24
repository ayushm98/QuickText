import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggeInUserId = req.user._id;
        const FilteredUsers = await User.find({_id: {$ne: loggeInUserId }}).select("-password");

        res.status(200).json(FilteredUsers);

        // const allUsers = await User.find(); // Para enviar mensaje a si mismo

    } catch (error) {
        console.log("Error in getUsersForSideBar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};