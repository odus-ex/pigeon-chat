import initializeDB from "./initializeDB";
const getChatSession = async (callBack) => {
  let dbNode = initializeDB();
  let allMessages = dbNode.get("chatroom");
  console.log("Fetching new messages...");
  allMessages.map().on((message) => {
    callBack(message);
  });
};

export default getChatSession;
