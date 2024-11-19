import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const link = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id)
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => {
        toast.error(
          "xatolik kasal topilmadi yoki internet ishlamayabdi qaytadan urunib ko'ring!"
        );
      });
  }, [id]);

  const updateUser = async (user) => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id, {
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
  console.log(user && user.data);
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

    const us = {
      first_name: first_name.length >= 1 ? first_name : user.data.first_name,
      last_name: last_name.length >= 1 ? last_name : user.data.last_name,
      phone: phone.length >= 1 ? phone : user.data.phone,
      address: address ? address : user.data.address,
      birth_date: birth_date ? birth_date : user.data.birth_date,
      allergies: allergies.length > 1 ? allergies : user.data.allergies,
      blood_group: blood_group.length > 1 ? blood_group : user.data.blood_group,
      diseases: diseases.length > 1 ? diseases : user.data.diseases,
      medical_history:
        medical_history.length > 1
          ? medical_history
          : user.data.medical_history,
      medications: medications.length > 1 ? medications : user.data.medications,
    };

    updateUser(us);
  };

  return (
    <div className=" mt-[20px] lg:mt-[50px] flex flex-col mx-auto gap-[20px] items-center max-w-[700px]  lg:max-w-[500px] justify-center">
      <h2 className="text-[15px] font-bold font-mono text-slate-900">
        Yangi Kasalni o'zgartirish
      </h2>
      {user && (
        <form
          onSubmit={formSubmit}
          className="max-w-[700px] border-2  rounded-md p-4 "
          method="POST"
          action="/"
        >
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="" className="flex flex-col">
              <span>Ismi: {user.data.first_name}</span>
              <input
                type="text"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                name="first_name"
                placeholder="ismi "
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Familyasi: {user.data.last_name}</span>
              <input
                type="text"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                name="last_name"
                placeholder="Familyasi "
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span>Telefon Raqami: {user.data.phone}</span>
              <input
                type="number"
                className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                name="phone"
                placeholder="Telefon Raqami "
              />
            </label>
            <div className="flex flex-col gap-[10px]">
              <label className="flex flex-col" htmlFor="">
                <span>Tug'ilgan sanasi: {user.data.birth_date}</span>
                <input
                  type="date"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  name="birth_date"
                  placeholder="Tug'ilgan sanasi"
                />
              </label>
              <label className="flex flex-col" htmlFor="">
                <span>Qon gruppasi: {user.data.blood_group}</span>
                <input
                  type="text"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  name="blood_group"
                  placeholder="Qon gruppasi"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                <span>
                  Kasalligi to'g'risidagi malumot: {user.data.diseases}
                </span>
                <textarea
                  name="diseases"
                  placeholder="Kasalligi to'g'risidagi malumot"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  id=""
                ></textarea>
              </label>
              <label className="flex flex-col" htmlFor="">
                <span>
                  Kasalning Tibbiy Tarixi: {user.data.medical_history}
                </span>
                <textarea
                  name="medical_history"
                  placeholder="Kasalning Tibbiy Tarixi"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  id=""
                ></textarea>
              </label>
              <label className="flex flex-col" htmlFor="">
                <span>Kasalliklari: {user.medications}</span>
                <textarea
                  name="medications"
                  placeholder="Kasalliklari"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  id=""
                ></textarea>
              </label>
              <label htmlFor="" className="flex flex-col">
                <span>Alergiyalarini yozing: {user.data.allergies}</span>
                <textarea
                  name="allergies"
                  placeholder="Alergiyalarini yozing:"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  id=""
                ></textarea>
              </label>
              <label htmlFor="" className="flex flex-col">
                <span>Kasalning manzili: {user.data.address}</span>
                <textarea
                  name="address"
                  placeholder="Kasalning manzili"
                  className="input input-bordered border-green-700 shadow-lg input-sm w-[300px]"
                  id=""
                ></textarea>
              </label>

              <button type="submit" className="btn btn-sm btn-outline">
                Kasalni Malumotlarini yangilash
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
