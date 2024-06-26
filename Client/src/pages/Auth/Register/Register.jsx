import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "~/components/TextInput";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";
import backgroundImage from "~/assets/image/Bg.png";

function Register() {
  const { register } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
    rePassword: "",
    fullName: "",
    email: "",
    gender: 0,
  });

  const onChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(data);
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={onSubmit} className="relative w-96 flex flex-col rounded-xl bg-white border border-gray-900 text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tl from-gray-900 to-slate-800">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign Up
          </h3>
        </div>
        <div className="flex flex-col gap-4 px-6 pt-6">
          <TextInput
            type="text"
            title={"Username"}
            value={data.username}
            name={"username"}
            onChange={onChange}
          />

          <TextInput
            type="password"
            title={"Password"}
            value={data.password}
            name={"password"}
            onChange={onChange}
          />

          <TextInput
            type="password"
            title={"re-enter the password"}
            value={data.rePassword}
            name={"rePassword"}
            onChange={onChange}
          />

          <TextInput
            type="fullName"
            title={"fullName"}
            value={data.fullName}
            name={"fullName"}
            onChange={onChange}
          />

          <TextInput
            type="email"
            title={"email"}
            value={data.email}
            name={"email"}
            onChange={onChange}
          />

          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                checked={data.gender == 0}
                value={0}
                onChange={onChange}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className="form-radio"
                name="gender"
                value={1}
                onChange={onChange}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div className="text-center px-4">
          <button
            className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
            type="submit"
          >
            Sign up
          </button>
        </div>
        <p className="my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Already have an account?
          <Link
            className="ml-1 block font-sans text-sm font-bold leading-normal underline  antialiased"
            to={routes.login}
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
