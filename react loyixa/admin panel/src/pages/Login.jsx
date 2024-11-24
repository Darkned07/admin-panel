import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Login({ setUsers }) {
  const loginUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;

    if ("doktor" === name) {
      if ("1234" === password) {
        setUsers({
          name: "doktor",
          password: "1234",
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "doktor",
            password: "1234",
          })
        );
      } else {
        toast.error("Parolingiz xatolik!");
      }
    } else {
      toast.error("username xato kiritildi!");
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="rounded-[16px] h-[100vh] w-[101vh] place-content-center grid bg-[#288994] ">
        <img className="w-[423px] h-[180px]" src="/logo.svg" alt="" />
      </div>
      <div className="rounded-[16px] h-[100vh] w-[101vh] place-content-center grid bg-[#fff] ">
        <form
          className="grid place-content-center flex-col gap-[20px]"
          onSubmit={loginUser}
        >
          <label className="form-control w-[400px]">
            <div className="label">
              <span className="label-text">Login</span>
            </div>
            <input
              type="text"
              placeholder="Login"
              name="name"
              className="input input-bordered "
            />
          </label>
          <label className="form-control w-[400px]">
            <div className="label">
              <span className="label-text">Parol</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="input input-bordered "
            />
          </label>
          <button
            type="submit"
            className="py-[12px] rounded-[8px] bg-[#288994] text-[#fff] text-[16px] font-mono font-semibold"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
