import initializeDB from "./initializeDB";
const createNewChatMessage = async (messageString) => {
  let dbNode = initializeDB();
  let userDB = dbNode.user();

  const message = userDB.get("all").set({ what: messageString });
  const dateAsIndex = new Date().toISOString();
};

export default createNewChatMessage;
