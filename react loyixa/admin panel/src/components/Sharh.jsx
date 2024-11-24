import React from "react";
import toast from "react-hot-toast";

function Sharh({ id, setDel, setDm }) {
  const subject = (data) => {
    fetch("https://dad-urolog.uz/api/apiadmin/bookinedit/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        toast.success("Sharx qoldirilidi :)");
        setDm(false);
        setDel(data);
      })
      .catch((err) => console.log(err));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.value;
    subject({ comment });
  };
  return (
    <div>
      <dialog id="my_modal_9" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-[#000] font-mono text-[24px] font-semibold">
            Sharx qoldirish
          </h2>
          <hr className="mt-[21px] mb-[21px]" />
          <form onSubmit={formSubmit}>
            <label className="form-control">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Sharx kiritish
                </span>
              </div>
              <textarea
                name="sharx"
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <div className="flex flex-row mt-[21px] gap-[16px] items-end justify-end">
              <form method="dialog">
                <button className="bg-[#E0E0E0] rounded-[8px] py-[6px] px-[20px] text-[#565656] font-mono text-[16px] font-semibold">
                  Bekor qilish
                </button>
              </form>
              <button className="text-[#fff] bg-[#288994] py-[6px] px-[20px] rounded-[8px] text-[16px] font-semibold font-mono">
                Saqlash
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Sharh;
