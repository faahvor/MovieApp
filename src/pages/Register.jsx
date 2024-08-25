import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-20 h-screen font-Aeonik_regular flex flex-row-reverse  justify-center">
      <form className="flex-1 flex flex-col items-center" action="">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-2xl font-aeonik_bold uppercase gap-2">
            Create your account
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sunt.
          </p>
        </div>
        <div className="form-body flex flex-col gap-4">
          <div className="flex  gap-5 *:flex *:flex-col">
            <div className="flex flex-col gap-1">
              <label className="font-Aeonik_bold text-sm" htmlFor="">
                First Name
              </label>
              <input
                className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
                type="text"
                id="firstName"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-Aeonik_bold text-sm" htmlFor="">
                Last Name
              </label>
              <input
                className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
                type="text"
                id="userName"
                placeholder="doe"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="userName">
              UserName
            </label>
            <input
              className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300 "
              type="text"
              id="userName"
              placeholder="johnny"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold  text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
              type="text"
              id="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold  text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-gray-200 rounded-md h-9 px-4 text-xl outline-red-300"
              type="password"
              id="password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="ConfirmPassword">
              ConfirmPassword
            </label>
            <input
              className="border-2 border-gray-200 rounded-md h-9 px-4 text-xl outline-red-300"
              type="password"
              id="ConfirmPassword"
            />
          </div>
          <button className="bg-[#CF1D1D] mt-5 w-full px-3 py-3 text-white" >Register</button>
        </div>
      
        <p className="text-gray-500 font-medium mt-3">Already have an account ? <Link className="font-semibold ml-1 text-black" to={"/login"}>Sign in</Link></p>
      </form>
      <div>
        <img
          className="h-screen flex-1"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724321201/Fingerprint-pana_di6yyj.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
