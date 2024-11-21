import React from "react";

function Tashxis() {
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
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
          <form action="" className="flex flex-col gap-[10px]">
            <label className="form-control w-full max-w-full">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Tashxis Sarlavhasi
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-full"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Shikoyatlar
                </span>
              </div>
              <textarea className="textarea textarea-bordered h-24"></textarea>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Tashxis matni
                </span>
              </div>
              <textarea className="textarea textarea-bordered h-24"></textarea>
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
      </dialog>
    </div>
  );
}

export default Tashxis;
