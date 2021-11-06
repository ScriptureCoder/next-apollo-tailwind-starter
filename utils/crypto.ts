import aes from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";

const passkey = "?Khgvg&YC-Qp42T5";

export const encryptData = (data:any, key=passkey) => {
    let encryptedString:any = aes.encrypt(JSON.stringify(data), key);
    encryptedString = encryptedString.toString();
    return encryptedString;
};

export const decryptData = (encryptedString:any, key=passkey) => {
    try {
        if (encryptedString){
            const decryptedString:any = aes.decrypt(encryptedString.toString(), key);
            return JSON.parse(decryptedString.toString(encUtf8));
        }else {
            return {}
        }

    } catch (error) {
        console.log(error);
    }
};
