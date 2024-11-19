import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="w-full lg:max-w-[600px] overflow-scroll h-[600px]">
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
                  <td className="px-6 py-4 whitespace-nowrap">{list.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{list.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{list.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/edit/${list.id}`}
                      className="px-2 py-1 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                    >
                      s
                    </Link>
                    <button
                      onClick={(e) => {
                        deleteUser(list.id);
                      }}
                      className="ml-2 px-2 py-1 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
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
