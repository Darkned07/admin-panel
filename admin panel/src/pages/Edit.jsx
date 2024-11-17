import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const link = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/apis/" + id)
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => {
        toast.error(
          "xatolik kasal topilmadi yoki internet ishlamayabdi qaytadan urunib ko'ring!"
        );
      });
  }, [id]);

  const updateUser = async (user) => {
    fetch("http://localhost:3000/apis/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        toast.success("Kasal Malumotlar yangilandi :)");
        link("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Internet yaxshi ishlamayabdi yoki baza bilan muammo chiqdi keyinroq urunib ko'ring!"
        );
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const ismi = e.target.ism.value;
    const famil = e.target.fam.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const reg_time = e.target.date.value;
    const kasal = e.target.kasal.value;

    const us = {
      ismi: ismi.length >= 3 ? ismi : user.ismi,
      famil: famil.length >= 3 ? famil : user.famil,
      age: age.length >= 1 ? age : user.age,
      gender: gender ? gender : user.gender,
      reg_time: reg_time ? reg_time : user.reg_time,
      kasal: kasal.length > 5 ? kasal : user.kasal,
    };

    updateUser(us);
  };

  return (
    <div className=" mt-[20px] lg:mt-[50px] flex flex-col mx-auto gap-[20px] items-center max-w-[700px]  lg:max-w-[500px] justify-center">
      <h2 className="text-[15px] font-bold font-mono text-slate-900">
        Yangi Kasalni o'zgartirish
      </h2>
      {user && (
        <form onSubmit={formSubmit} className="max-w-[700px] border-2  rounded-md p-4 "  method="POST" action="/">
          <div className="flex flex-col gap-[10px]">
            <span>kasalning ismi:{user.ismi}</span>
            <input
              type="text"
              className="input input-bordered border-green-700 shadow-lg input-sm w-full"
              name="ism"
              placeholder="Kasalning ismi "
            />
            <span>Kasalning familyasi: {user.famil}</span>
            <input
              type="text"
              className="input input-bordered border-green-700 shadow-lg input-sm w-full"
              name="fam"
              placeholder="Kasalning Familyasi "
            />
            <span>Kasalning yoshi: {user.age}</span>
            <input
              type="number"
              className="input input-bordered border-green-700 shadow-lg input-sm w-full"
              name="age"
              placeholder="Kasalning yoshi "
            />
            <span>Kasalning jinsi: {user.gender}</span>
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[15px] font-bold">Kasalning Jinsi:</h2>
              <label
                className="flex flex-row items-center gap-[5px]"
                htmlFor="erk"
              >
                <span className="mt-[-2px] font-semibold">Erkak</span>
                <input type="radio" value={"erkak"} name="gender" id="erk" />
              </label>

              <label
                className="flex flex-row items-center gap-[5px]"
                htmlFor="ay"
              >
                <span className="mt-[-2px] font-semibold">Ayol</span>
                <input type="radio" value={"ayol"} name="gender" id="ay" />
              </label>
              <span>Kasalning ro'yxatdan o'tgan sanasi: {user.reg_time}</span>
              <input
                type="date"
                className="input input-bordered border-green-700 shadow-lg input-sm w-full"
                name="date"
              />
              <span className="flex flex-col gap-[2px]">
                Kasalning kasalligi xaqida malumoti: <p>{user.kasal}</p>
              </span>
              <textarea
                name="kasal"
                placeholder="Kasalligi to'g'risidagi malumot"
                className="input input-bordered border-green-700 shadow-lg input-sm w-full h-[40px]"
                id=""
              ></textarea>

              <button type="submit" className="btn btn-sm btn-outline">
                Kasalni ro'yxatdan o'tkazish
              </button>
            </div>
          </div>
        </form>
      )}
      {!user && (
        <span className="text-center text-[16px] font-bold">
          Xatolik yuz berdi
        </span>
      )}
    </div>
  );
}

export default Edit;
