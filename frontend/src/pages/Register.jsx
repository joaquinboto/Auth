import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';



function Register() {
    const navigateLogin = useNavigate();

    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
      });

      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };


      const handleSubmit = async (event) => {
        event.preventDefault();

        if (itValidate()) {
          const { username, password } = values;
          const response = await axios.post("http://localhost:3001/api/register", {
            username,
            password
          });
          console.log(response);
          if (response.status === 200) {
            toast.success("Successfully registered", toastOptions);
            localStorage.setItem("chat-app-current-user", response.config.data);
            navigateLogin("/");
          }
          
        }
       

      };

      const itValidate = () => {
        const { username, password, confirmPassword } = values;
        if (password !== confirmPassword) {
          toast.error(
            "Las contraseñas no coinciden",
            toastOptions
          );
          return false;
        } else if (username.length < 3) {
          toast.error(
            "El usuario debe tener al menos 3 caracteres",
            toastOptions
          );
          return false;
        } 
    
        return true;
      }


  return (
    <>
    <FormContainer>
    <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
    </FormContainer>
    <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {

    padding: 1rem;
    border: 0.1rem solid black;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid red;
      outline: none;
    }
  }
  button {
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
        background-color: #4e0eff;
    }
  }
  span {
    color: black;
    text-transform: uppercase;
    a {
      color: black;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;





export default Register