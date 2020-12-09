import UserStorage from "./User/User.DataStorage.js";
import DataStorageType from '../Util/Constant/DataStorageType.js';

let ReducerStorage;
export default ReducerStorage = {
  [DataStorageType.USER_STORAGE]: UserStorage,
};

