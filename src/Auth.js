import React from 'react'
import { Button } from "antd";
import { useGoogleLogin } from "@react-oauth/google";

import { FcGoogle } from "react-icons/fc";
const Auth = () => {
    const handleGoogleAuth = async (credentialResponse) => {
        console.log(credentialResponse);
        try {
          const response = await fetch(
            "http://localhost:8080/auth/google/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: credentialResponse.code,
              }),
            }
          );
          const data = await response.json();
          console.log("data---", data);
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
        //   const data = await response.json();
        //   console.log("data---", data);
          localStorage.setItem("AuthData", JSON.stringify(data));
        } catch (err) {
          console.error("Fetch Error:", err);
        }
      };
    
      const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (tokenResponse) => handleGoogleAuth(tokenResponse),
      });
  return (
    <div>
            <Button
        onClick={() => googleLogin()}
        size="large"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
          width: "100%",
        }}
      >
        <FcGoogle
          style={{
            marginRight: 3,
          }}
        />
        <span>Login with Google</span>
      </Button>
    </div>
  )
}

export default Auth