import React,{ useState }  from 'react'
import PasswordAndConfirmPasswordValidation from '../useraccaunt/password-and-confirm-password-validation/PasswordAndConfirmPasswordValidation'


const Register = ({ setAuth }) => {
        const [inputs, setInputs] = useState({
            name: "",
            email: "",
          password: ""
        });
      
        
        const { name, email , password} = inputs;
      
        const onChange = e =>
          setInputs({ ...inputs, [e.target.name]: e.target.value });
      
        const onSubmitForm = async e => {
          e.preventDefault();
          try {
            const body = { name , email, password};
            const response = await fetch(
              "http://localhost:5000/auth/register",
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(body)
              }
            );
            const parseRes = await response.json();
      
            if (parseRes.jwtToken) {
              localStorage.setItem("token", parseRes.jwtToken);
              setAuth(true);
              toast.success("Register Successfully");
            } else {
              setAuth(false);
              toast.error(parseRes);
            }
          } catch (err) {
            console.log(err.message);
          }
        };
  return (
  <div className="Auth-form-container">
  <form className="Auth-form"  onSubmit={onSubmitForm}>
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign Up</h3>
      <div className="form-group mt-3">
        <label>Full Name</label>
        <input
          type="name"
          name='name'
          value={name}
          className="form-control mt-1"
          onChange={e =>onChange(e)}
          placeholder="e.g Jane Doe"
        />
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          name='email'
          className="form-control mt-1"
          value={email}
          placeholder="Email Address"
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group mt-3">
      <label>Password</label>
    
      <PasswordAndConfirmPasswordValidation/>
      </div>
      
      {/* <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          name='password'
          value={password}
          onChange={e => onChange(e)}
          className="form-control mt-1"
          placeholder="Password"
        />
        
      </div> */}
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="text-center mt-2">
        Forgot <a href="#">password?</a>
      </p>
    </div>
  </form>
</div>

)
}
  


export default Register