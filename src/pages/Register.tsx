import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const [error, setError] = useState(null);

  // const navigate = useNavigate();

  // const handleChange = (e: { target: { name: string; value: string; }; }) => {
  //   setInputs(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post('/auth/register', inputs);
  //     navigate('/login');
  //   } catch (err: any) {
  //     console.log(err);
  //     setError(err.response.data);
  //   }
  // };

  return (
    <div>Register</div>
    // <div className='auth'>
    //   <h1>Register</h1>
    //   <form>
    //     <input
    //       required
    //       type="text"
    //       placeholder='username'
    //       name='username'
    //       onChange={handleChange}
    //     />
    //     <input
    //       required
    //       type="email"
    //       placeholder='email'
    //       name='email'
    //       onChange={handleChange}
    //     />
    //     <input
    //       required
    //       type="password"
    //       placeholder='password'
    //       name='password'
    //       onChange={handleChange}
    //     />
    //     <button
    //       onClick={handleSubmit}
    //     >
    //       Register
    //     </button>
    //     {error && <p>{error}</p>}
    //     <span>Do you have an account? <Link to='/login'>Login</Link></span>
    //   </form>
    // </div>
  );
};

export default Register;