"use client"
import { logInWithGoogle } from "@/services/pocketbase/auth";

import './Login.css'
import './Button.css';
import Button from "./Button";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const router = useRouter();

    const handleLoginButton = async () => {
        try {
            await logInWithGoogle();
            
            window.location.href = '/';
            
        } catch (error) {
            console.error('Erro ao realizar login:', error);

        }
    };

    return (
        <div className="login">
            <Button onClick={handleLoginButton}>
                <FaGoogle className="icon-google"/> 
                <span style={{fontSize:'17px', zIndex:'1'}}> Login com o Google</span>
            </Button>
        </div>
    );
};

export default Login;


