import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function QabulModal() {
  const [apiData, setApiData] = useState(null);
  const [time, setTime] = useState(null);
  useEffect(() => {
    fetch("https://dad-urolog.uz/api/api28/available_times/")
      .then((data) => data.json())
      .then((data) => setApiData(data))
      .catch((err) => console.log(err));
  }, []);

  const dataSelect = (e) => {
    const date = e.target.value;

    fetch("https://dad-urolog.uz/api/api28/available_times/?date=" + date)
      .then((data) => data.json())
      .then((data) => setTime(data))
      .catch((err) => console.log(err));
  };

  const createUser = (us) => {
    fetch("https://dad-urolog.uz/api/api28/create_booking/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(us),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  console.log(time);
  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = "+" + e.target.phone.value;
    const date = e.target.date.value;
    const times = e.target.time && e.target.time.value;
    const message = e.target.message.value;

    if (name.length > 3) {
      if (phone.length > 11) {
        if (times) {
          createUser({
            name,
            phone,
            date: date + "T" + times + ":00",
            message,
          });
        } else {
          toast.error("kun bilan soatni kiriting!");
        }
      } else {
        toast.error("Telefon raqam 998 bilan boshlanishi kerak!");
      }
    } else {
      toast.error("Ismni kiriting!");
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            method="POST"
            onSubmit={formSubmit}
            action=""
            className="flex flex-col gap-[24px]"
          >
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-[#4D4D4D] text-[14px] font-bold">
                  Ism Familiya
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Jamshid botirov"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-[#4D4D4D] text-[14px] font-bold">
                  Telefon raqam
                </span>
              </div>
              <input
                type="number"
                name="phone"
                placeholder="+998 123 45 67"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-[#4D4D4D] text-[14px] font-bold">
                  Qulay vaqtni tanlang
                </span>
              </div>
              <div className="flex flex-row  rounded-[8px] border-[1px] border-[#E4E4E4] bg-[#FFF] py-[7px] px-[15px] items-center justify-between">
                <select
                  onChange={dataSelect}
                  className="text-[#989898] text-[16px] font-bold outline-none"
                  name="date"
                >
                  {apiData &&
                    apiData.data.dates.map((dat) => {
                      return (
                        <option key={dat} value={dat}>
                          {dat}
                        </option>
                      );
                    })}
                </select>

                {apiData && time && time.data.times.length > 1 ? (
                  <select
                    className="text-[#989898] text-[16px] font-bold"
                    name="time"
                    id=""
                  >
                    {apiData &&
                      time.data.times.map((tim) => {
                        return (
                          <option key={tim} value={tim}>
                            {tim}
                          </option>
                        );
                      })}
                  </select>
                ) : (
                  <div className="dropdown dropdown-hover dropdown-end">
                    <div
                      tabIndex={5}
                      role="button"
                      className=" text-[#989898] text-[16px] font-bold "
                    >
                      Message
                    </div>
                    <p
                      tabIndex={5}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      {apiData && apiData.data.message}
                    </p>
                  </div>
                )}
              </div>
            </label>
            <label className="form-control">
              <div className="label">
                <span className="text-[#4D4D4D] text-[14px] font-bold">
                  Xabar
                </span>
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <button
              type="submit"
              className="py-[18px] w-full text-center bg-[#245E6C] rounded-[8px] text-[#fff] text-[16px] font-bold "
            >
              Jo'natish
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default QabulModal;
