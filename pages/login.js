import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {

    const login = useGoogleLogin({
        onSuccess: async codeResponse => console.log(codeResponse),
        onError: error => console.log(error),
        flow: 'auth-code',
    });

    return <div>
        <button 
            onClick={() => login()}
            className="p-3 bg-slate-400"
        >
            Login with Google
        </button>
    </div>
}

export default Login;