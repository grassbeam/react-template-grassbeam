

export const IS_DEBUG = process.env.NODE_ENV === 'development';

/*
 * For Redux Purpose Here
*/
export const _ENCRYPT_KEY = "asd123$!@#lksaokwldq";
export const STOR_KEY = {
    RootAllStorage: IS_DEBUG? "grassbeamStorage": "__gbs",
}