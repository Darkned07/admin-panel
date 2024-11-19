import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

function UserList() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id)
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
                  {user && user.data.id}
                </p>
                <Link
                  className="btn btn-sm  btn-outline"
                  to={`/edit/${user.data.id}`}
                >
                  yangilash
                </Link>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning ismi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.first_name}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Familyasi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.last_name}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Telefon Raqami:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.phones}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Manzili:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.address}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Tug'ilgan sanasi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.birth_date}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Qon gruppasi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.blood_group}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalliklari xaqida:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.diseases}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Tibbiy Tarixi:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.medical_history}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasalning Dorilari:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.medications}
                </p>
              </span>
              <span className="flex flex-row gap-[10px] font-bold items-center justify-center">
                Kasal ro'yxatdan o'tgan vaqt:
                <p className="font-mono mt-[4px] text-[16px] ">
                  {user && user.data.visit_date}
                </p>
              </span>
            </div>
          )}
          {!user && (
            <span className="loading mx-auto loading-bars loading-lg"></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
