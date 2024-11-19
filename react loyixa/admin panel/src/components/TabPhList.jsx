import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function TabPhList({ lists }) {
  const navigate = useNavigate();
  const deleteUser = (id) => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => {
        navigate("/create");
        toast.success("Kasal bazadan o'chirib yuborildi :)");
      })
      .catch((err) => {
        toast.error(
          "Xatolik yuz berdi 1 yoki 3 minutdan so'ng urunib ko'ring !"
        );
        console.log(err);
      });
  };

  return (
    <div>
      <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] w-[full] lg:max-w-[650px] max-container mt-[20px] overflow-scroll max-h-[600px] ">
        <div className="">
          <table className="table table-md table-pin-rows table-pin-cols  ">
            <thead>
              <tr>
                <th>ID</th>
                <td>Ismi</td>
                <td>Telefon Raqami</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!lists && (
                <tr>
                  <td></td>
                  <td>Xozir</td>
                  <td>Kasallar</td>
                  <td>Mavjud</td>
                  <td>Emas</td>
                  <td></td>
                </tr>
              )}
              {lists &&
                lists.map((list) => {
                  return (
                    <tr className="border-[2px]" key={list.id}>
                      <th className="border-[1px] ">{list.id}</th>
                      <td>{list.name}</td>
                      <td>{list.phone}</td>

                      <td className="flex flex-col gap-[2px]">
                        <Link
                          className="py-1 px-1 border-[2px] text-green-800 bg-gray-300"
                          to={`/kasal/${list.id}`}
                        >
                          Davomi
                        </Link>
                        <button
                          onClick={(e) => {
                            deleteUser(list.id);
                          }}
                          className="py-1 px-1 border-[2px] text-green-300 bg-slate-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <td>Ismi</td>
                <td>Telefon Raqami</td>

                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabPhList;
