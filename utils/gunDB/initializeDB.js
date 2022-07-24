//order of imports is important
import GUN from "gun";
import "gun/sea";

const initializeDB = () => new GUN();

export default initializeDB;
