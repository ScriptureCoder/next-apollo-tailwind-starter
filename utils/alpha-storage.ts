import {decryptData, encryptData} from "./crypto";

class AlphaStorage{

    setItem=(key:string, value:string)=> (localStorage.setItem(key, encryptData(value)));

    getItem=(key:string)=> (
        decryptData(localStorage.getItem(key))
    );

    removeItem=(key:string)=> (
        localStorage.removeItem(key)
    );

    clear=(key:string)=> (
        localStorage.clear()
    )

}

export default new AlphaStorage()
