import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Register = () => {
  return (
  	<Fragment className="card" style="margin: 100rem;">
  	  <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
  	  <form class="card-body">
  	  	<div class="form-floating">
	      <input type="first-name" class="form-control" id="floating-first-name" placeholder="First Name" />
	      <label for="floating-first-namel">First Name</label>
	    </div>
  	  	<div class="form-floating">
	      <input type="last-name" class="form-control" id="floating-last-name" placeholder="Last Name" />
	      <label for="floating-last-namel">Last Name</label>
	    </div>
  	  	<div class="form-floating">
	      <input type="email" class="form-control" id="floatingEmail" placeholder="abc@example.com" />
	      <label for="floatingEmail">Email</label>
	    </div>
	    <div class="form-floating">
	      <input type="date" class="form-control" id="floating-dob" placeholder="abc@example.com" />
	      <label for="floatingEmail">DOB</label>
	    </div>
	    <div class="form-check">
		  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
		  <label class="form-check-label" for="flexRadioDefault1">
		    Default radio
		  </label>
		</div>
	    <div class="form-floating">
	      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
	      <label for="floatingPassword">Password</label>
	    </div>
	    <div class="col-auto">
	      <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
	    </div>
  	  </form>
  	</Fragment>
  );
}

Register.propTypes = {

}

export default Register;