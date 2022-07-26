import initializeDB from "./initializeDB";
const getChatSession = async (callBack) => {
  let dbNode = initializeDB();
  console.log("Yewaaa...");
  //   dbNode
  //     .get("chat")
  //     .map()
  //     .on(async (data, id) => {
  //       if (data) {
  //         var message = {
  //           who: await dbNode.user(data).get("alias"),
  //           what: data.what,
  //           when: Gun.state.is(data, "what"),
  //         };

  //         if (message.what) {
  //           callBack(message.what);
  //         }
  //       }
  //     });
  function cb(data) {
    console.log("Yolo data ====>", data);
  }

  dbNode
    .get("chat")
    .map()
    .once((data) => cb(data));
  console.log("Aweee");
};

export default getChatSession;
