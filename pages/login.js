import { useGoogleLogin } from '@react-oauth/google';
import { Button} from 'emse-ui';

const Login = () => {

    const login = useGoogleLogin({
        onSuccess: async codeResponse => console.log(codeResponse),
        onError: error => console.log(error),
        flow: 'auth-code',
        hosted_domain: 'odu.edu',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:3000/auth/redirect'
    });

    return (
        <div className="h-screen flex items-center">
            
            <div className="grid place-items-center h-1/4 w-full ">
                <div>
                    <h1 className= "text-7xl font-black text-center text-black">ALMP</h1>
                    <h2 className="text-black font-semibold text-xl">You must be logged in to access this resource.</h2>
                </div>
            
                <Button
                    onClick={() => login()}
                    label="Login with Google"
                    type="button"
                    primary={true}
                />
            </div>

        </div>
    );
}

export default Login;