export const createNewUser = (
  userDetails,
  userDBReference,
  onUserCreationCallback
) => {
  userDBReference.create(
    userDetails.userName,
    userDetails.password,
    onUserCreationCallback
  );
};

export const getAllMessages = (chatDBReference, callBack) => {
  console.log("Checking available chats...", chatDBReference);
  chatDBReference?.map().on((data) => callBack(data));
};

export const createNewMessage = async (chatDBReference, messageString) => {
  chatDBReference?.set({
    alias: "",
    message: messageString,
    isPublished: true, // for content moderation,
    dttm: Date.now(), //created or updated date and time
  });
};
