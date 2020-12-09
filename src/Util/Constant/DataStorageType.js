import * as Config from "../../config";

let DataStorageType = {
  USER_STORAGE: Config.IS_DEBUG?"UserStorage":"_us",
}


export default DataStorageType;