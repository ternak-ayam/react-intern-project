import React from 'react';
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const { label, name, type, placeholder, value, onChange, errorMessage } = props;

    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label> 
            <Input 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className={`${errorMessage ? 'border-red-500' : ''}`}  // Menambahkan border merah jika ada error
            />
            {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
        </div>
    );
};

export default InputForm;
