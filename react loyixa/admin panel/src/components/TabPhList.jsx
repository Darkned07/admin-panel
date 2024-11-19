import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";

function TabPhList({ lists, setDel }) {
  const navigate = useNavigate();
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
  console.log(lists);
  return (
    <div className=" razmer overflow-scroll ">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ismi
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Telefon Raqami
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              others
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {lists &&
            lists.map((list) => {
              return (
                <tr key={list.id}>
                  <td className="px-6 py-4 border-[1px] whitespace-nowrap">{list.id}</td>
                  <td className="px-6 py-4 border-[1px] whitespace-nowrap">{list.name}</td>
                  <td className="px-6 py-4 border-[1px] whitespace-nowrap">{list.phone}</td>
                  <td className="px-6 py-4 border-[1px] whitespace-nowrap flex flex-row items-center gap-1">
                    <Link to={`/edit/${list.id}`} className="btn btn-sm btn-outline">
                      <FiEdit3 />
                    </Link>
                    <button
                      onClick={(e) => {
                        deleteUser(list.id);
                      }}
                      className="btn btn-sm btn-warning btn-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TabPhList;
