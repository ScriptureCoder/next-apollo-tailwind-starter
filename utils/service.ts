import Storage from "./storage";

async function http(data:any,url:string,object?:any) {
    let Authorization:any = undefined;
    const token = await Storage.getItem("@token");

    if (token) {
        Authorization = `Bearer ${token}`;
    }
    let headers:any = {
        Accept: 'application/json',
        Authorization
    };

    if (!object){
        headers["Content-Type"] = 'application/json';
    }

    return new Promise((resolve, reject) =>{
        fetch(url, {
            method:"POST",
            headers,
            body: object?data:JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export default http;

