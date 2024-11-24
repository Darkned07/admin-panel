import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Tashxis from "./Tashxis";

function Jadval({ users, setDel, setName }) {
  

  const [idTash, setIdTash] = useState(null);
  const [modals, setModals] = useState(true);
  console.log(users);
  const [mod, setMod] = useState(true);
  const deleteUser = (id) => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id, {
      method: "DELETE",
      mode: "cors",
    })
      .then((data) => {
        setDel(data);
        toast.success("Bemor bazadan o'chirib yuborildi :)");
      })
      .catch((err) => {
        toast.error(
          "Xatolik yuz berdi 1 yoki 3 minutdan so'ng urunib ko'ring !"
        );
        console.log(err);
      });
  };

  return (
    <div className=" flex flex-col gap-[18px] razmer__jadval mt-[16px] bg-[#FFF8F8] p-[16px] rounded-[16px]">
      {/* page boshi */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-[#000] font-mono text-[36px] font-semibold">
          Bemorlar
        </h2>
        {mod && <Modal setMod={setMod} setDel={setDel} />}
        <button
          onClick={() => {
            setMod(true);
            setTimeout(() => {
              document.getElementById("my_modal_3").showModal();
            }, 200);
          }}
          className="py-[9px] px-[14px] rounded-[8px] bg-[#1E40AD] flex flex-row gap-[8px] items-center text-[#FFF8F8] font-mono text-[14px] font-semibold"
        >
          <img src="./create.svg" alt="" />
          qoshish
        </button>
      </div>

      {/* forma */}
      <div className="flex flex-row gap-[8px] items-center justify-between">
        <form
          action=""
          className="flex flex-wrap items-center justify-between gap-[8px]"
        >
          <label className="input w-[350px] input-sm input-bordered flex items-center gap-2">
            <input
              onChange={(e) => {
                setName(e.target.value);
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
          <select className="select select-sm select-bordered w-[200px]">
            <option disabled selected>
              ID
            </option>
            {/* <option>Han Solo</option>
            <option>Greedo</option> */}
          </select>
          <select className="select select-sm select-bordered w-[200px]">
            <option disabled selected>
              Kamayish
            </option>
            {/* <option>Han Solo</option>
            <option>Greedo</option> */}
          </select>
          <select className="select select-sm select-bordered w-[200px]">
            <option disabled selected>
              10
            </option>
          </select>
        </form>
      </div>

      {/* jadval */}
      <div className="flex flex-col">
        <div className="overflow-x-auto razmer__jadval rounded-[8px] shadow-2xl">
          <table className="table table-pin-rows ">
            <thead className="">
              <tr className="bg-[#F0F1F3]  border-[1px] border-[#E4E4E4]">
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  №
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  ID
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Ism
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Familiya
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Telefon
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Tug'ilgan sana
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Ro'yxatdan olingan
                </th>
                <th className="text-[14px] font-mono font-semibold text-[#00000099]">
                  Harakatlar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white ">
              {users &&
                users.patients.map((user, index) => {
                  return (
                    <tr key={user.id} className="border-[1px] border-[#E4E4E4]">
                      <td>{index + 1}</td>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>

                      <td>{user.phone}</td>
                      <td>{user.birth_date}</td>
                      <td>
                        <span className="ml-[5px]">
                          {user.visit_date.slice(0, 10)}
                        </span>
                        <span className="ml-[5px] text-[#1E40AD]">
                          {user.visit_date.slice(11, 16)}
                        </span>
                      </td>

                      <td className="w-[200px] flex flex-row gap-[7px] items-center">
                        <button
                          onClick={() => {
                            setModals(true);

                            setTimeout(() => {
                              document.getElementById("my_modal_4").showModal();
                            }, 200);

                            setIdTash(user.id);
                          }}
                        >
                          <img src="./cret.svg" alt="" />
                        </button>
                        <Link to={`/patient/edit/${user.id}`}>
                          <img
                            className="p-[5px] bg-[#0FED1E] rounded-[8px]"
                            src="./edit.svg"
                            alt=""
                          />
                        </Link>
                        <Link to={`/patient/${user.id}`}>
                          <img src="./see.svg" alt="" />
                        </Link>
                        <button
                          onClick={(e) => {
                            deleteUser(user.id);
                          }}
                        >
                          <img src="./delete.svg" alt="" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            {modals && (
              <Tashxis idTash={idTash} setDel={setDel} setModals={setModals} />
            )}
          </table>
        </div>
        
      </div>
    </div>
  );
}

export default Jadval;
