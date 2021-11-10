import React, {useState,useEffect} from 'react';

interface Interface {
    type?:string
    name?:string
    setValue:(val:any)=>void
    value:any
    className?:string
    required?:boolean
    placeholder?:string
    min?:number
}

const Input:React.FC<Interface>=({type="text",name, setValue, value, className, required=false,placeholder,min })=> {
    useEffect(()=>{
        if (name){
            const val = sessionStorage.getItem(name) || "";
            setValue(val)
        }
    },[]);

    const onChange=( {target}:any ) => {
        setValue(target.value);
        if (name){
            sessionStorage.setItem(name,target.value);
        }
    };
    return (
        <input type={type} name={name} onChange={onChange} min={min} required={required} value={value} className={`${className}`} placeholder={placeholder}/>
    );
};

export default Input;
