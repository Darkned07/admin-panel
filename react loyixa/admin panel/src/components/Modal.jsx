import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Modal({ setMod, setDel }) {
  const link = useNavigate();

  const createUser = async (user) => {
    fetch("https://dad-urolog.uz/api/apiadmin/get_all_patients_view_id/", {
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
        link("/bemorlar");
        setDel(data);
        setMod(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Internet yaxshi ishlamayabdi yoki baza bilan muammo chiqdi keyinroq urunib ko'ring!"
        );
      });
  };

  const createFrom = (e) => {
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

    if (first_name.length > 3) {
      if (last_name.length > 3) {
        if (phone.length >= 9) {
          if (birth_date) {
            createUser({
              first_name,
              last_name,
              phone,
              address,
              allergies,
              blood_group,
              diseases,
              medical_history,
              medications,
              birth_date,
            });
          } else {
            toast.error("Xatolik tug'ulgan sanani kiriting");
          }
        } else {
          toast.error("Xatolik telefon raqamni kiriting");
        }
      } else {
        toast.error("Xatolik iltimos Familyani kiriting");
      }
    } else {
      toast.error("Xatolik iltimos ismni kiriting");
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-md p-[8px] border-[1px] border-[#E4E4E4] btn-circle btn-ghost  absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-[#000] font-mono text-[24px] font-semibold">
            Qoshish
          </h3>
          <hr className="w-full h-[1px] bg-[#E4E4E4]" />
          <div>
            <form
              onSubmit={createFrom}
              action=""
              className="flex flex-wrap gap-[10px]"
            >
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Ismi
                  </span>
                </div>
                <input
                  type="text"
                  name="first_name"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Familiya
                  </span>
                </div>
                <input
                  name="last_name"
                  type="text"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Tug'ilgan sana
                  </span>
                </div>
                <input
                  type="date"
                  name="birth_date"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Telefon
                  </span>
                </div>
                <input
                  type="number"
                  name="phone"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Qon gruppa
                  </span>
                </div>
                <input
                  type="text"
                  name="blood_group"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Kasalligi to’g’risida ma’lumot
                  </span>
                </div>
                <input
                  type="text"
                  name="medical_history"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Bemorning tibbiy tarixi
                  </span>
                </div>
                <input
                  name="medications"
                  type="text"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Kasallanishlari
                  </span>
                </div>
                <input
                  name="diseases"
                  type="text"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Allergiyalari
                  </span>
                </div>
                <input
                  name="allergies"
                  type="text"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <label className="form-control w-full max-w-[220px]">
                <div className="label">
                  <span className="text-[#000] font-mono text-[16px] font-semibold">
                    Kasalning Manzili
                  </span>
                </div>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full max-w-[220px]"
                />
              </label>
              <div className="flex flex-row items-center ml-auto gap-[5px]">
                <form method="dialog">
                  <button className="py-[12px] px-[20px] rounded-[8px] bg-[#E0E0E0] text-[#565656] font-mono text-[16px] font-semibold ">
                    Bekor qilish
                  </button>
                </form>

                <button
                  className="py-[12px] px-[20px] rounded-[8px] bg-[#288994] text-[#FFF] font-mono font-semibold text-[16px]"
                  type="submit"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
