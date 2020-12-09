// import DataStorageType from '../../Util/Constant/DataStorageType.js';
import { Util, Log, DataStorageHelper, DataStorageType } from "../../Util";




export const STORAGE_LAST_ACTION = "LastAction";
export const STORAGE_AUTH_LOGIN = "AuthLogin";


const UserInitialState = {
    [STORAGE_LAST_ACTION]: null,
    [STORAGE_AUTH_LOGIN]: null,
  }
  
  export default function UserStorage(state=UserInitialState, action) {
    if (action.type == DataStorageType.USER_STORAGE) {
      if (action.strloc === STORAGE_AUTH_LOGIN) {
        return {
            ...state,
            [STORAGE_LAST_ACTION]: action.payload,
            [action.strloc]: action.value
          };
      } else 
        return {
            ...state,
            [STORAGE_LAST_ACTION]: action.payload,
            [action.strloc]: action.value
        };

    } else return state;
  }





  /**
   * User Storage Getter and Setter
   */


export function isAuthenticated (props = {}) {
  var result = false;
  var caused = "";

  const json = props[DataStorageType.USER_STORAGE][STORAGE_AUTH_LOGIN];
  result = !!(!Util.isNullOrEmpty(json));
  return result;
}


export function removeAuthenticatedUser() {
  return DataStorageHelper.CreateDispatcherObj(DataStorageType.USER_STORAGE, 
    'result_of_removeAuthenticatedUser', STORAGE_AUTH_LOGIN, null);
}