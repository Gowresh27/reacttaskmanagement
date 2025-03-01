import React,{useState} from 'react'
import "./Auth.css"
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden ">
      <div className="box  lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              
              src="https://tse1.mm.bing.net/th/id/OIP.5sJnt4QqL89Pikri6Piw9gHaEK?pid=ImgDet&w=474&h=266&rs=1"
              alt=""
            />
            <div className="text">
              <span className="text-1">
              Success is built upon well-organized tasks
              </span>
              <span className="text-2 text-xs">Let's get connected </span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://dataconomy.com/wp-content/uploads/2022/09/What-is-the-brain-of-the-computer-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full "> 
            {/* {isRegister ? ( */}
            <div className="login-form">
              <Signin togglePanel={togglePanel} />
            </div>
              {/* ) : ( */}
            <div className="signup-form">
              <Signup togglePanel={togglePanel} />
            </div>
              {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
