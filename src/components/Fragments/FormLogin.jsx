import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setSuccess, setErrors, setMessage } from '../../slices/authSlice';
import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button";
import '../../styles/hourglass.css';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, isSuccess, errors, message } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Ambil pesan dari URL parameter
    const params = new URLSearchParams(location.search);
    const msg = params.get('message');
    if (msg === 'register-success') {
      dispatch(setMessage('Registrasi berhasil! Silahkan login.'));
    }
  }, [location, dispatch]);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      dispatch(setLoading(true));

      // Simulasi proses login
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setSuccess(true));

        setTimeout(() => {
          dispatch(setSuccess(false));
          navigate('/home?message=login-success');
        }, 2000);
      }, 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          label="Password" 
          type="password" 
          placeholder="*****" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errors.password}  
        />

        <Button classname="bg-blue-600 w-full mt-4" type="submit">
          Login
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
            Selamat, Anda berhasil login!
          </div>
        </div>
      )}

      {message && (
        <div className="notification">
          {message}
        </div>
      )}
    </>
  );
};

export default FormLogin;
