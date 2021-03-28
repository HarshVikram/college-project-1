import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileForm = () => {
  return (
  	<Fragment className="card" style="margin: 100rem;">
  	  <h1 className="large text-primary">Set Up your Profile</h1>
      <p className="lead">Enter your credentials</p>
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
	      <input type="number" class="form-control" id="floating-number" placeholder="+91 5313553218" />
	      <label for="floating-number">Phone</label>
	    </div>
	    <div class="form-floating">
	      <input type="date" class="form-control" id="floating-dob" placeholder="abc@example.com" />
	      <label for="floatingEmail">DOB</label>
	    </div>
	    <p>Gender:</p>
	    <div class="form-check">
		  <input class="form-check-input" type="radio" name="flex-radio-male" id="flex-radio-male" />
		  <label class="form-check-label" for="flex-radio-male">Male</label>
		</div>
		<div class="form-check">
		  <input class="form-check-input" type="radio" name="flex-radio-female" id="flex-radio-female" />
		  <label class="form-check-label" for="flex-radio-female">Female</label>
		</div>
		<div class="form-check">
		  <input class="form-check-input" type="radio" name="flex-radio-others" id="flex-radio-others" />
		  <label class="form-check-label" for="flex-radio-others">Others</label>
		</div>
		<p>Address:</p>  
	    <div class="form-floating">
	      <input type="text" class="form-control" id="floating-street" placeholder="abc@example.com" />
	      <label for="floatingEmail">Street</label>
	    </div>
	    <div class="form-floating">
	      <input type="text" class="form-control" id="floating-city" placeholder="" />
	      <label for="">City</label>
	    </div>
	    <div class="form-floating">
	      <input type="text" class="form-control" id="floating-" placeholder="abc@example.com" />
	      <label for="floatingEmail">State</label>
	    </div>
	    <div class="form-floating">
	      <input type="text" class="form-control" id="floating-" placeholder="abc@example.com" />
	      <label for="floatingEmail">Country</label>
	    </div>
	    <div class="form-floating">
	      <input type="number" class="form-control" id="floating-" placeholder="abc@example.com" />
	      <label for="floatingEmail">Pincode</label>
	    </div>
	    <div class="col-auto">
	      <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
	    </div>
  	  </form>
  	</Fragment>
  );
}

ProfileForm.propTypes = {

}

export default ProfileForm;