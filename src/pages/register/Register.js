import React, { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    // Redirect to your Google Form when the component mounts
    window.location.href = "https://your-google-form-url-here"; // Replace with your Google Form URL
  }, []);

  return null; // No UI is required since it redirects
};

export default Register;
