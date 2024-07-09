import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email };
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(savedUser),
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log('User saved:', data);
                        navigate(from, { replace: true });
                    })
                    .catch((error) => {
                        console.error('Error saving user:', error);
                    });
            })
            .catch((error) => {
                console.error('Google sign-in failed', error);
            });
    };

    return (
        <div>
            <div className='divider'></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
