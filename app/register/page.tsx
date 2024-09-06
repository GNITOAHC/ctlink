import React from "react";

import { RegisterForm, OTPForm } from "./_components";

const Register = () => {
  return (
    <div className="px-20 py-12">
      <h1>Register</h1>
      <RegisterForm />
      <OTPForm />
    </div>
  );
};

export default Register;
