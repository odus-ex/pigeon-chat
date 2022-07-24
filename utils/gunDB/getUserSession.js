import initializeDB from "./initializeDB";
const getUserSession = async () => {
  let sessionDetails = null;
  let dbNode = initializeDB();

  //user DB reference
  let userDB = dbNode.user();

  sessionDetails = userDB.is || null; //userDB.is returns undefined when user is not present

  //check for user session details in 'session' DB
  return sessionDetails;
};

export default getUserSession;
