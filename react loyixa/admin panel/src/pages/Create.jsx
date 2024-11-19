import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Create() {
  const link = useNavigate();
  const createUser = async (user) => {
    fetch("https://dad-urolog.uz/api/apiadmin/creatediagnos/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
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

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const allergies = e.target.allergies.value;
    const birth_date = e.target.birth_date.value;
    const blood_group = e.target.blood_group.value;
    const diseases = e.target.diseases.value;
    const medical_history = e.target.medical_history.value;
    const medications = e.target.medications.value;

    if (first_name.length >= 3) {
      if (phone.length >= 9) {
        createUser({
          first_name,
          last_name,
          phone,
          address,
          allergies,
          birth_date,
          blood_group,
          diseases,
          medical_history,
          medications,
        });
      } else {
        toast.error("Telefon raqam kamida 9ta harfdan iborat bo'lishi kerak!");
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
          <label htmlFor="" className="flex flex-col">
            <span>Ismi:</span>
            <input
              type="text"
              className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
              name="first_name"
              placeholder="Kasalning ismi "
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span>Familyasi</span>
            <input
              type="text"
              className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
              name="last_name"
              placeholder="Kasalning Familyasi "
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <input
              type="number"
              className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
              name="phone"
              placeholder="Kasalning Telefon Raqami "
            />
          </label>
          <div className="flex flex-col gap-[10px]">
            <label className="flex flex-col" htmlFor="">
              <span>Tug'ilgan sanasi:</span>
              <input
                type="date"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                name="birth_date"
                placeholder="Tug'ilgan sanasi"
              />
            </label>
            <label className="flex flex-col" htmlFor="">
              <span>Qon gruppasi:</span>
              <input
                type="text"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                name="blood_group"
                placeholder="Qon gruppasi"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Kasalligi to'g'risidagi malumot:</span>
              <textarea
                name="diseases"
                placeholder="Kasalligi to'g'risidagi malumot"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                id=""
              ></textarea>
            </label>
            <label className="flex flex-col" htmlFor="">
              <span>Kasalning Tibbiy Tarixi</span>
              <textarea
                name="medical_history"
                placeholder="Kasalning Tibbiy Tarixi"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                id=""
              ></textarea>
            </label>
            <label className="flex flex-col" htmlFor="">
              <span>Kasalliklari</span>
              <textarea
                name="medications"
                placeholder="Kasalliklari"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                id=""
              ></textarea>
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Alergiyalarini yozing:</span>
              <textarea
                name="allergies"
                placeholder="Alergiyalarini yozing:"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                id=""
              ></textarea>
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Kasalning manzili</span>
              <textarea
                name="address"
                placeholder="Kasalning manzili"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                id=""
              ></textarea>
            </label>
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
