import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setSuccess, setErrors } from '../../slices/authSlice';
import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
import '../../styles/hourglass.css';

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, errors } = useSelector((state) => state.auth);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!fullname) {
      newErrors.fullname = 'Full name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length > 13) {
      newErrors.phone = 'Phone number cannot exceed 13 digits';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (password.length > 20) {
      newErrors.password = 'Password cannot exceed 20 characters';
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(setLoading(true));

      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setSuccess(true));

        setTimeout(() => {
          dispatch(setSuccess(false));
          navigate('/login?message=register-success');
        }, 2000);
      }, 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm 
          label="Full Name" 
          type="text" 
          placeholder="Insert your name here" 
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          errorMessage={errors.fullname}  
        />

        <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@gmail.com" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={errors.email}  
        />

        <InputForm 
          label="Phone Number" 
          type="text" 
          placeholder="Enter your phone number" 
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          errorMessage={errors.phone}  
        />

        <InputForm 
          label="Password" 
          type="password" 
          placeholder="*****" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errors.password}  
        />

        <InputForm 
          label="Confirm Password" 
          type="password" 
          placeholder="*****" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMessage={errors.confirmPassword}  
        />

        <Button classname="bg-blue-600 w-full mt-4" type="submit">
          Register
        </Button>
      </form>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="hourglass"></div>
        </div>
      )}

      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
            Register sukses, silahkan login!
          </div>
        </div>
      )}
    </>
  );
};

export default FormRegister;
