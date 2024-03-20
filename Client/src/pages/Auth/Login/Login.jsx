import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "~/components/TextInput";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";

function Login() {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({ username: "", password: "" });

  const onChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(data);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-neutral-100">
      <form
        onSubmit={onSubmit}
        className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tl from-gray-900 to-slate-800">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Sign In
          </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
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
        </div>

        <div className="text-center px-4">
          <button
            className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
            type="submit"
          >
            Sign in
          </button>
        </div>
        <p className="my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Don&apos;t have an account?
          <Link
            className="ml-1 block font-sans text-sm font-bold leading-normal underline  antialiased"
            to={routes.register}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
