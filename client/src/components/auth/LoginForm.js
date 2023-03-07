import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch('/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, password: password})
    })

    if(response.status !== 201) {
      console.log("login unsuccessful")
      navigate('/login')
    } else {
      console.log("login successful")
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      console.log(data)
      window.localStorage.setItem("user", data.user);
      navigate('/');
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

    return (
      <>
      <Navbar/>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5" >
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Jump Back In!</h1>
            <p className="col-lg-10 fs-4">
              While you've been away we've been busy sourcing the best experiences London has to offer.
              Take a look and start making unforgettable memories today.
            </p>
            <div>
            <p>New to Dealscover London?</p>
            <div className="col-12">
              <a href="/signup">
                <button className="w-100 btn btn btn-dark" type="button">
                  Sign up
                </button>
              </a>
            </div>
          </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={handleSubmit}
            > 
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  placeholder="Email"
                  data-testid="email"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  id="floatingInputEmail"
                />

                <label htmlFor="floatingInputEmail">Email Address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  data-testid="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  minLength={8}
                  id="floatingInputPassword"
                />
                <label htmlFor="floatingInputPassword">Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-dark"
                type="submit"
                value="Submit"
                role="submit-button"
                data-testid="submit"
              >
                Sign In
              </button>
              <hr className="my-4"></hr>
              <small className="text-muted">Dealscover London</small>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}


export default LogInForm;