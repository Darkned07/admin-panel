import { useState } from "react";
import QabulModal from "../components/QabulModal";
import Sharh from "./Sharh";

function Booking({
  deletes,
  statusSelect,
  doc,
  setModal,
  setSearch,
  modal,
  setDel,
}) {
  const [id, setId] = useState(null);
  const [dm, setDm] = useState(false);
  return (
    <>
      <div className="p-[16px] mt-[10px] rounded-[16px]  bg-[#fff] ">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-[#000] text-[36px] font-semibold font-mono">
              Qabulga yozilganlar
            </h2>
            <div className="flex flex-row gap-[16px]">
              <label className="input w-[350px] input-sm input-bordered flex items-center gap-2">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  type="text"
                  className="grow"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input
                type="date"
                className="rounded-[8px] text-[14px] text-[#10101099] font-semibold font-mono  border-[1px] border-[#00000066] py-[9px] px-[14px] bg-[#DDD] "
              />

              <button
                onClick={() => {
                  setModal(true);
                  setTimeout(() => {
                    document.getElementById("my_modal_1").showModal();
                  }, 300);
                }}
                className="py-[9px] px-[14px] bg-[#288994] flex flex-row items-center gap-[8px] rounded-[8px]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[#fff] font-mono font-semibold text-[14px]">
                  Qabulga yozish
                </span>
              </button>

              {modal && <QabulModal setModal={setModal} />}
            </div>
          </div>
          <div className="overflow-x-auto razmer__jadval rounded-[8px] shadow-2xl">
            <table className="table table-pin-rows ">
              <thead className="">
                <tr className="bg-[#F0F1F3]  border-[1px] border-[#E4E4E4]">
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    №
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Ism Familiya
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Telefon
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Holati
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Sana
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Vaqt
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Xabar
                  </th>
                  <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                    Harakatlar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                {doc &&
                  doc.map((d, index) => {
                    return (
                      <tr key={d.id} className="border-[1px] border-[#E4E4E4]">
                        <td>{index + 1}</td>
                        <td>{d.name}</td>
                        <td>{d.phone}</td>
                        <td>
                          <select
                            onChange={(e) => {
                              statusSelect(e, d.id);
                            }}
                            name="status"
                            className={`  text-[14px] font-mono font-medium  rounded-[4px] px-[8px] py-[4px]  ${
                              d.status === "Kutilmoqda"
                                ? "bg-[#c7872d33] text-[#C7872D]"
                                : d.status === "Keldi"
                                ? "bg-[#2dc75533] text-[#2DC755]"
                                : "bg-[#fc282833] text-[#FC2828]"
                            }`}
                            id=""
                          >
                            <option value={d.status} defaultValue={d.status}>
                              {d.status}
                            </option>
                            {d.status_choices &&
                              d.status_choices.map((b) => {
                                return (
                                  <option key={b} value={b}>
                                    {b}
                                  </option>
                                );
                              })}
                          </select>
                        </td>

                        <td>{d.date}</td>
                        <td>{d.time}</td>
                        <td>{d.text}</td>
                        <td className="w-[200px]  flex flex-row gap-[7px] items-center">
                          <button
                            onClick={() => {
                              setId(d.id);
                              setDm(true)
                              document.getElementById("my_modal_9").showModal();
                            }}
                          >
                            <img src="./cret.svg" alt="" />
                          </button>
                          <button
                            className="tooltip tooltip-left"
                            data-tip={d.comment}
                          >
                            {d.has_comment ? (
                              <svg
                                width="31"
                                height="30"
                                viewBox="0 0 31 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  width="30"
                                  height="30"
                                  rx="8"
                                  fill="#EF1212"
                                />
                                <path
                                  d="M22.875 8.75H9.12502C8.7935 8.75 8.47556 8.8817 8.24114 9.11612C8.00672 9.35054 7.87502 9.66848 7.87502 10V22.5C7.87358 22.7384 7.94101 22.9721 8.06921 23.173C8.19741 23.374 8.38092 23.5336 8.59768 23.6328C8.76286 23.7097 8.94281 23.7497 9.12502 23.75C9.41846 23.7493 9.70217 23.6447 9.9258 23.4547L9.93284 23.4492L12.4844 21.25H22.875C23.2065 21.25 23.5245 21.1183 23.7589 20.8839C23.9933 20.6495 24.125 20.3315 24.125 20V10C24.125 9.66848 23.9933 9.35054 23.7589 9.11612C23.5245 8.8817 23.2065 8.75 22.875 8.75ZM22.875 20H12.25C12.1 20.0001 11.9549 20.0542 11.8414 20.1523L9.12502 22.5V10H22.875V20Z"
                                  fill="white"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="31"
                                height="30"
                                viewBox="0 0 31 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  width="30"
                                  height="30"
                                  rx="8"
                                  fill="#C5C5C5"
                                />
                                <path
                                  d="M22.875 8.75H9.12502C8.7935 8.75 8.47556 8.8817 8.24114 9.11612C8.00672 9.35054 7.87502 9.66848 7.87502 10V22.5C7.87358 22.7384 7.94101 22.9721 8.06921 23.173C8.19741 23.374 8.38092 23.5336 8.59768 23.6328C8.76286 23.7097 8.94281 23.7497 9.12502 23.75C9.41846 23.7493 9.70217 23.6447 9.9258 23.4547L9.93284 23.4492L12.4844 21.25H22.875C23.2065 21.25 23.5245 21.1183 23.7589 20.8839C23.9933 20.6495 24.125 20.3315 24.125 20V10C24.125 9.66848 23.9933 9.35054 23.7589 9.11612C23.5245 8.8817 23.2065 8.75 22.875 8.75ZM22.875 20H12.25C12.1 20.0001 11.9549 20.0542 11.8414 20.1523L9.12502 22.5V10H22.875V20Z"
                                  fill="white"
                                />
                              </svg>
                            )}
                          </button>

                          <button
                            onClick={() => {
                              deletes(d.id);
                            }}
                          >
                            <img src="/delete.svg" alt="" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        {dm && <Sharh id={id} setDel={setDel} setDm={setDm} />}
      </div>
    </>
  );
}

export default Booking;
