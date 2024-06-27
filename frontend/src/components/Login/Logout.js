import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const Signout = () => {
  const navigate = useNavigate(); 

  const { setToken } = useContext(userContext);

  const handleSignOut = () => {

localStorage.clear();


    setToken(null);

    navigate('/Home');
  };
  handleSignOut()
  return (
    <button type="button" className="btn btn-primary" onClick={handleSignOut}>
      Sign out
    </button>
  );
};

export default Signout;
