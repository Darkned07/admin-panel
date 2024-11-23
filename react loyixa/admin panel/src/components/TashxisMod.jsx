import React, { useEffect, useState } from "react";

function TashxisMod({ crud, diag, setCrudTash,setDel }) {
  const [diagnoz, setDiagnoz] = useState(null);
  useEffect(() => {
    fetch("https://dad-urolog.uz/api/apiadmin/diagnosapi/" + diag)
      .then((data) => data.json())
      .then((data) => {
        setDiagnoz(data);
      })
      .catch((err) => console.log(err));
  }, [diag]);

  const editForm = (malumot) => {
    fetch("https://dad-urolog.uz/api/apiadmin/diagnosapi/" + diag, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(malumot),
    })
      .then((data) => data.json())
      .then((data) => {
        setDel(data);
      })
      .catch((err) => console.log(err));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const complaints = e.target.complaints.value;

    editForm({ name, complaints, description });
  };

  return (
    <div>
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-md p-[8px] border-[1px] border-[#E4E4E4] btn-circle btn-ghost  absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-[#000] font-mono text-[24px] font-semibold">
            Tashxislash
          </h3>
          <hr className="w-full h-[1px] mt-[20px] bg-[#E4E4E4]" />
          <form
          method="PATCH"
            onSubmit={formSubmit}
            action=""
            className="flex flex-col gap-[10px]"
          >
            <label className="form-control w-full max-w-full">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Tashxis Sarlavhasi
                </span>
              </div>
              <input
                type="text"
                defaultValue={diagnoz && diagnoz.data.name}
                name="name"
                disabled={crud ? "" : "disabled"}
                className="input input-bordered w-full max-w-full"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Shikoyatlar
                </span>
              </div>
              <textarea
                name="complaints"
                disabled={crud ? "" : "disabled"}
                defaultValue={diagnoz && diagnoz.data.complaints}
                className="textarea textarea-bordered h-24"
              ></textarea>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Tashxis matni
                </span>
              </div>
              <textarea
                disabled={crud ? "" : "disabled"}
                defaultValue={diagnoz && diagnoz.data.description}
                name="description"
                className="textarea textarea-bordered h-24"
              ></textarea>
            </label>
            <div className="flex flex-row items-center ml-auto gap-[5px]">
              <form method="dialog">
                <button
                  onClick={() => {
                    setCrudTash(null);
                  }}
                  className="py-[12px] px-[20px] rounded-[8px] bg-[#E0E0E0] text-[#565656] font-mono text-[16px] font-semibold "
                >
                  Bekor qilish
                </button>
              </form>
              {crud && (
                <button
                  className="py-[12px] px-[20px] rounded-[8px] bg-[#288994] text-[#FFF] font-mono font-semibold text-[16px]"
                  type="submit"
                >
                  Saqlash
                </button>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default TashxisMod;
