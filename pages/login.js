import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {

    const login = useGoogleLogin({
        onSuccess: async codeResponse => console.log(codeResponse),
        onError: error => console.log(error),
        flow: 'auth-code',
        hosted_domain: 'odu.edu',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:3000/api/auth/redirect'
    });

    return (
        <div>
            <button 
                onClick={() => login()}
                className="p-3 bg-slate-400"
            >
                Login with Google
            </button>
        </div>
    );
}

export default Login;