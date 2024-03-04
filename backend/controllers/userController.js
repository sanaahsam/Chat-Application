import User from "../models/authmodel.js";
import Conversation from "../models/conversationModel.js"; // Assuming you have a Conversation model

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // Find conversations where the logged-in user is a participant
    const userConversations = await Conversation.find({
      participants: loggedInUserId,
    }).select("_id");

    // Extract user IDs from the conversations
    const userIDsInConversations = userConversations.map(
      (conv) => conv.participants
    );

    // Find users who are not in any of the conversations
    const filterUsers = await User.find({
      _id: { $ne: loggedInUserId, $nin: userIDsInConversations },
    }).select("-password");

    res.status(200).json(filterUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
