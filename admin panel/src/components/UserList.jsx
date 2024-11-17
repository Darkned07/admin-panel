import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserList() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/apis/" + id)
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <div className="">
      <div className="card bg-base-100 lg:max-w-[700px] shadow-xl">
        <div className="card-body">
          <h2 className="text-[16px] font-mono  font-bold  text-center border-b-2">
            Kasallik varaqasi!
          </h2>

          {user && (
            <div className="flex flex-col lg:items-start  lg:justify-between gap-[10px]">
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Id raqami:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.id}
                </p>
                <Link className="btn btn-sm  btn-outline" to={`/edit/${user.id}`}>yangilash</Link>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning ismi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.ismi}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Familyasi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.famil}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Yoshi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.age}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Jinsi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.gender}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasal ro'yxatdan o'tgan vaqt:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.reg_time}
                </p>
              </span>
              <span className="flex flex-col   gap-[10px] font-bold items-center justify-center">
                Kasali xaqida qisqacha malumot:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.kasal}
                </p>
              </span>
            </div>
          )}
          {!user && (
            <span>
              Kasal Topilmadi yoki aloqa yaxshi emasligi uchun bazaga ulanib
              bo'lmadi birozdan so'ng urunib ko'ring
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
