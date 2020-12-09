import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ReducerStorage from './Data/DataStorage.js';

import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
// import createEncryptor from 'redux-persist-transform-encrypt';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import * as Config from "./config";
import { Log } from "./Util";
 
const encryptor = encryptTransform({
  secretKey: Config._ENCRYPT_KEY,

  onError: function(error) {
    // Handle the error.
    Log.debugGroup("encryptor error", error);
  }
});

const configNorm = {
  key: Config.STOR_KEY.RootAllStorage,
  storage: storage
}

const configEncrypted = {
  key: Config.STOR_KEY.RootAllStorage,
  storage: storage,
  transforms: [encryptor]
}

const rootPersistConfig = Config.IS_DEBUG? configNorm: configEncrypted;

// var reducerStorage = combineReducers(ReducerStorage);

let persitedReducer= persistCombineReducers(rootPersistConfig, ReducerStorage);
// let persitedReducer= ReducerStorage;

export default function configureStore(initialState={}) {
  let store = createStore(persitedReducer,applyMiddleware(thunk)); 
  let persistor= persistStore(store);
  return {store,persistor};
}
