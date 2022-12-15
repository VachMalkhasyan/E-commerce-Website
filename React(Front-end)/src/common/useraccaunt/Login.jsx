import React ,{ useState } from 'react'

const Login = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
      email: "",
      password: ""
    });
  
    const { email, password } = inputs;
  
    const onChange = e =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { email, password };
        const response = await fetch(
          "http://localhost:5000/auth/login",
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
          toast.success("Logged in Successfully");
        } else {
          setAuth(false);
          toast.error(parseRes);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    


  return (
    <div className="Auth-form-container">
    <form className="Auth-form"  onSubmit={onSubmitForm}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            name='email'
            value={email}
            onChange={e =>onChange(e)}
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name='password'
            value={password}
            onChange={e => onChange(e)}
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
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

export default Login