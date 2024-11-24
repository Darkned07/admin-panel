import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Maqsad() {
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch("https://dad-urolog.uz/api/apiadmin/coldclients/")
      .then((data) => data.json())
      .then((data) => {
        setBook(data)})
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <Navbar />
      <div className="p-[16px] mt-[24px] rounded-[16px] shadow-2xl bg-[#fff]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-[#000] font-mono text-[36px] font-semibold">
              Maqsadli bemorlar
            </h2>
            <div className="flex flex-row items-center gap-[16px]">
              <button className="bg-[#c7872d33] p-[8px] rounded-[8px] text-[#C7872D] text-[14px] font-mono font-medium ">
                Kutilmoqda
              </button>
              <button className="bg-[#2dc75533] p-[8px] rounded-[8px] text-[#2DC755] text-[14px] font-mono font-medium ">
                Yozildi
              </button>
              <button className="bg-[#fc282833] p-[8px] rounded-[8px] text-[#FC2828] text-[14px] font-mono font-medium ">
                Rad etildi
              </button>
              <input
                type="date"
                className="rounded-[8px] text-[14px] text-[#10101099] font-semibold font-mono  border-[1px] border-[#00000066] py-[9px] px-[14px] bg-[#DDD] "
              />
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
                {book &&
                  book.data.coldclients.map((bok) => {
                    return (
                      <tr
                        key={bok.id}
                        className="border-[1px] border-[#E4E4E4]"
                      >
                        <td>1</td>
                        <td>{bok.name}</td>
                        <td>{bok.phone}</td>
                        <td>
                          <select
                            name="status"
                            className={`  text-[14px] font-mono font-medium  rounded-[4px] px-[8px] py-[4px]  ${
                              bok.status === "Kutilmoqda"
                                ? "bg-[#c7872d33] text-[#C7872D]"
                                : bok.status === "Keldi"
                                ? "bg-[#2dc75533] text-[#2DC755]"
                                : "bg-[#fc282833] text-[#FC2828]"
                            }`}
                            id=""
                          >
                            <option
                              value={bok.status}
                              defaultValue={bok.status}
                            >
                              {bok.status}
                            </option>
                            {bok.status_choices.map((b) => {
                              return (
                                <option key={b} value={b}>
                                  {b}
                                </option>
                              );
                            })}
                          </select>
                        </td>

                        <td>{bok.date}</td>
                        <td>{bok.time}</td>

                        <td>{bok.comment}</td>

                        <td className="w-[200px] flex flex-row gap-[7px] items-center">
                          <button>
                            <img src="/message.svg" alt="" />
                          </button>
                          <button>
                            <img src="/cret.svg" alt="" />
                          </button>
                          <button>
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
      </div>
    </div>
  );
}

export default Maqsad;
