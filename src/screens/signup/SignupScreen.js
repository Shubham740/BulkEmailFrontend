import { useEffect } from "react";
import { useSelector } from "react-redux";

const SignupScreen = () => {
  const emailId = useSelector((state) => state.LoginReducer.email);

  useEffect(() => {
    console.log("emailId =>>>", emailId);
  }, []);

  return <div>SignUp Screen</div>;
};

export default SignupScreen;
