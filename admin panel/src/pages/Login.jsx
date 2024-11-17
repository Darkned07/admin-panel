import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/auth")
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;

    user.filter((us) => {
      if (us.name === name) {
        if (us.password === password) {
          console.log("salom ");
          
        } else {
          toast.error("Parolingiz xatolik!");
        }
      } else {
        toast.error("username xato kiritildi!");
      }
    });

    
  };

  return (
    <div className="grid h-[100vh] place-content-center">
      <form
        onSubmit={loginUser}
        className="flex flex-col gap-[15px] max-w-[500px]  border-[3px] rounded-lg border-slate-600 py-[12px] px-[18px] bg-green-500"
      >
        <h2 className="text-[16px] font-bold text-center mb-[12px]">Kirish</h2>

        <label className="input input-bordered  flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="name"
            className="grow w-full"
            placeholder="Username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="parolingiz"
          />
        </label>
        <button type="submit" className="btn btn-sm  btn-outline w-full">
          Kirish
        </button>
      </form>
    </div>
  );
}

export default Login;
