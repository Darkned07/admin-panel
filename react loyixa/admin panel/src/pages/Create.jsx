import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Create() {
  const link = useNavigate();
  const createUser = async (user) => {
    fetch("http://localhost:3000/apis", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        toast.success("Kasal bazaga saqlandi :)");
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

    if (ismi.length >= 3) {
      if (famil.length >= 3) {
        if (age.length >= 1) {
          if (reg_time) {
            if (gender) {
              if (kasal.length >= 10) {
                createUser({
                  ismi,
                  famil,
                  age,
                  gender,
                  reg_time,
                  kasal,
                });
              } else {
                toast.error(
                  "Kasallik to'grisidagi malumotni iltimos to'liqroq yozing!"
                );
              }
            } else {
              toast.error("Jinsi kiritilishi kerak!");
            }
          } else {
            toast.error("Sana kiritilishi kerak!");
          }
        } else {
          toast.error("Yosh kiritilishi kerak!");
        }
      } else {
        toast.error("Familya kamida 3ta harfdan iborat bo'lishi kerak!");
      }
    } else {
      toast.error("Ism kamida 3ta harfdan ko'proq bolishi kerak!");
    }
  };

  return (
    <div className=" mt-[20px] lg:mt-[50px] flex flex-col gap-[20px] items-center justify-between">
      <h2 className="text-[15px] font-bold font-mono text-slate-900">
        Yangi Kasalni qo'shish
      </h2>

      <form onSubmit={formSubmit} method="POST" action="/">
        <div className="flex flex-col gap-[10px]">
          <input
            type="text"
            className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
            name="ism"
            placeholder="Kasalning ismi "
          />
          <input
            type="text"
            className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
            name="fam"
            placeholder="Kasalning Familyasi "
          />
          <input
            type="number"
            className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
            name="age"
            placeholder="Kasalning yoshi "
          />
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
            <input
              type="date"
              className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
              name="date"
            />
            <textarea
              name="kasal"
              placeholder="Kasalligi to'g'risidagi malumot"
              className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
              id=""
            ></textarea>

            <button type="submit" className="btn btn-sm btn-outline">
              Kasalni ro'yxatdan o'tkazish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
