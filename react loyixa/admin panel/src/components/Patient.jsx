import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import TashxisMod from "./TashxisMod";
import Tashxis from "./Tashxis";
import QabulModal from "./QabulModal";

function Patient() {
  const [user, setUser] = useState(null);
  const [diagnoz, setDiagnoz] = useState(null);
  const { id, edit } = useParams();
  const [del, setDel] = useState(null);
  const [diagId, setDiagId] = useState(null);
  const [crudTash, setCrudTash] = useState(null);
  const [modals, setModals] = useState(true);
  const [mod, setMod] = useState(false);
  const [mols, setMols] = useState(false);

  const [disabled, setDisabled] = useState("disabled");

  useEffect(() => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id)
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));

    fetch(
      "https://dad-urolog.uz/api/apiadmin/get_diagnos_with_patient_id/?patient_id=" +
        id
    )
      .then((data) => data.json())
      .then((data) => setDiagnoz(data))
      .catch((err) => console.log(err));
    setMod(false);
  }, [id, del]);
  diagnoz && console.log(diagnoz.diagnosis);
  user && console.log(user.data);

  const updateUser = async (user) => {
    fetch("https://dad-urolog.uz/api/apiadmin/patient_view/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        toast.success("Patient Malumotlari yangilandi :)");
        console.log(data);
        setDel(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Internet yaxshi ishlamayabdi yoki baza bilan muammo chiqdi keyinroq urunib ko'ring!"
        );
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const allergies = e.target.allergies.value;
    const birth_date = e.target.birth_date.value;
    const blood_group = e.target.blood_group.value;
    const diseases = e.target.diseases.value;
    const medical_history = e.target.medical_history.value;
    const medications = e.target.medications.value;
    const us = {
      first_name,
      last_name,
      phone,
      address,
      birth_date,
      allergies,
      blood_group,
      diseases,
      medical_history,
      medications,
    };
    updateUser(us);
  };

  const deleteDiagnoz = (idDiagnoz) => {
    fetch("https://dad-urolog.uz/api/apiadmin/diagnosapi/" + idDiagnoz, {
      method: "DELETE",
      mode: "cors",
    })
      .then((data) => {
        setDel(data);
        toast.success("Diagnoz o'chirib yuborildi");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex w-full flex-col gap-[24px] mb-[10px]">
      <Navbar />
      <div className="flex flex-col gap-[16px] p-[16px] rounded-[16px] bg-[#fff]">
        <div className="flex flex-row items-center justify-between ">
          <h2 className="text-[#000] font-mono text-[24px] font-semibold">
            {user && user.data.first_name}
          </h2>
          <div className="flex flex-row gap-[8px]">
            <button
              onClick={() => {
                disabled === "disabled"
                  ? setDisabled("")
                  : setDisabled("disabled");
              }}
              className="p-[5px] bg-[#0FED1E] rounded-[8px]"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2594 5.73209L14.768 2.24146C14.6519 2.12536 14.5141 2.03326 14.3624 1.97042C14.2107 1.90759 14.0482 1.87524 13.884 1.87524C13.7198 1.87524 13.5572 1.90759 13.4056 1.97042C13.2539 2.03326 13.1161 2.12536 13 2.24146L3.36641 11.8751C3.24983 11.9907 3.15741 12.1284 3.09451 12.2801C3.0316 12.4318 2.99948 12.5944 3.00001 12.7586V16.2501C3.00001 16.5816 3.1317 16.8995 3.36612 17.1339C3.60054 17.3684 3.91849 17.5001 4.25001 17.5001H17.375C17.5408 17.5001 17.6997 17.4342 17.8169 17.317C17.9342 17.1998 18 17.0408 18 16.8751C18 16.7093 17.9342 16.5503 17.8169 16.4331C17.6997 16.3159 17.5408 16.2501 17.375 16.2501H9.50938L18.2594 7.50006C18.3755 7.38398 18.4676 7.24617 18.5304 7.09449C18.5933 6.94282 18.6256 6.78025 18.6256 6.61607C18.6256 6.45189 18.5933 6.28933 18.5304 6.13765C18.4676 5.98597 18.3755 5.84816 18.2594 5.73209ZM7.74141 16.2501H4.25001V12.7586L11.125 5.88365L14.6164 9.37506L7.74141 16.2501ZM15.5 8.49146L12.0094 5.00006L13.8844 3.12506L17.375 6.61646L15.5 8.49146Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <form
          onSubmit={formSubmit}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <div className="flex flex-row gap-[16px] ">
            <label className="form-control w-[225px]">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Ism
                </span>
              </div>
              <input
                name="first_name"
                disabled={disabled}
                defaultValue={user && user.data.first_name}
                type="text"
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[225px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Familiya
                </span>
              </div>
              <input
                type="text"
                disabled={disabled}
                defaultValue={user && user.data.last_name}
                name="last_name"
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[225px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Tug'ilgan sana
                </span>
              </div>
              <input
                type="text"
                disabled={disabled}
                defaultValue={user && user.data.birth_date}
                name="birth_date"
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[240px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Telefon Raqam
                </span>
              </div>
              <input
                type="number"
                name="phone"
                disabled={disabled}
                defaultValue={user && user.data.phone}
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex flex-row gap-[16px]">
            <label className="form-control w-[135px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Qon gruppa
                </span>
              </div>
              <input
                defaultValue={user && user.data.blood_group}
                type="text"
                name="blood_group"
                disabled={disabled}
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[400px]">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Kasalligi to’g’risida ma’lumot
                </span>
              </div>
              <input
                type="text"
                disabled={disabled}
                defaultValue={user && user.data.medical_history}
                name="medical_history"
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[400px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Kasalning Manzili
                </span>
              </div>
              <input
                defaultValue={user && user.data.address}
                name="address"
                type="text"
                disabled={disabled}
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex flex-row gap-[16px]">
            <label className="form-control w-[310px]">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Kasalning tibbiy tarixi
                </span>
              </div>
              <input
                disabled={disabled}
                type="text"
                defaultValue={user && user.data.medications}
                name="medications"
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[310px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Kasalliklari
                </span>
              </div>
              <input
                disabled={disabled}
                type="text"
                name="diseases"
                defaultValue={user && user.data.diseases}
                className="input input-sm bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
            <label className="form-control w-[310px] ">
              <div className="label">
                <span className="text-[#000] font-mono text-[16px] font-semibold">
                  Alergiyalari
                </span>
              </div>
              <input
                type="text"
                disabled={disabled}
                name="allergies"
                defaultValue={user && user.data.allergies}
                className="input input-sm  bg-[#F4F4F4] border-[1px] border-[#DADADA] input-bordered w-full "
              />
            </label>
          </div>

          <div className="flex items-end w-full justify-end">
            <button
              disabled={disabled}
              className="text-[#FFF8F8] max-w-[100px] mt-[10px]  text-[14px] font-mono font-semibold py-[9px] px-[12px] rounded-[8px] bg-[#1E40AD]"
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-[16px] p-[16px] rounded-[16px] bg-[#fff]">
        <div className="flex flex-row items-center justify-between ">
          <h2 className="text-[#000] font-mono text-[36px] font-semibold">
            Tashxislar
          </h2>
        </div>
        <div className="">
          <div className="razmer__jadval__2 overflow-x-auto border">
            <table className="table table-pin-rows">
              <thead>
                <tr className="border-[1px] border-[#E4E4E4] bg-[#F0F1F3] rounded-t-[8px] ">
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    №
                  </th>
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    Tashxis nomi
                  </th>
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    Shikoyatlari
                  </th>
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    Tashxis matni
                  </th>
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    Ro'yxatga olingan
                  </th>
                  <th className="text-[#00000099] text-[14px] font-mono font-semibold ">
                    Harakatlar
                  </th>
                </tr>
              </thead>
              <tbody>
                {diagnoz &&
                  diagnoz.diagnosis.map((diag) => {
                    return (
                      <tr
                        key={diag.id}
                        className="border-[1px] border-[#E4E4E4] bg-[#FFF] rounded-b-[8px]"
                      >
                        <td className="text-[#292D32] font-mono text-[14px] font-semibold ">
                          1
                        </td>
                        <td className="text-[#292D32] font-mono text-[14px] font-semibold ">
                          {diag.name}
                        </td>
                        <td className="text-[#292D32] font-mono text-[14px] font-semibold ">
                          {diag.complaints.slice(0, 20)}
                        </td>
                        <td className="text-[#292D32] font-mono text-[14px] font-semibold ">
                          {diag.description.slice(0, 20)}
                        </td>

                        <td>
                          <span className="text-[#292D32] font-mono text-[14px] font-semibold mr-[5px]">
                            {diag.created_at}
                          </span>
                          {/* <span className="text-[#1E40AD] font-mono ml-[5px] text-[14px] font-semibold">
                            12:02
                          </span> */}
                        </td>
                        <td className="flex flex-row gap-[8px]">
                          <button
                            onClick={() => {
                              setDiagId(diag.id);

                              setCrudTash("edit");
                              setMols(true);
                              setTimeout(() => {
                                document
                                  .getElementById("my_modal_6")
                                  .showModal();
                              }, 100);
                            }}
                            className="p-[5px] bg-[#0FED1E] rounded-[8px]"
                          >
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.2594 5.73209L14.768 2.24146C14.6519 2.12536 14.5141 2.03326 14.3624 1.97042C14.2107 1.90759 14.0482 1.87524 13.884 1.87524C13.7198 1.87524 13.5572 1.90759 13.4056 1.97042C13.2539 2.03326 13.1161 2.12536 13 2.24146L3.36641 11.8751C3.24983 11.9907 3.15741 12.1284 3.09451 12.2801C3.0316 12.4318 2.99948 12.5944 3.00001 12.7586V16.2501C3.00001 16.5816 3.1317 16.8995 3.36612 17.1339C3.60054 17.3684 3.91849 17.5001 4.25001 17.5001H17.375C17.5408 17.5001 17.6997 17.4342 17.8169 17.317C17.9342 17.1998 18 17.0408 18 16.8751C18 16.7093 17.9342 16.5503 17.8169 16.4331C17.6997 16.3159 17.5408 16.2501 17.375 16.2501H9.50938L18.2594 7.50006C18.3755 7.38398 18.4676 7.24617 18.5304 7.09449C18.5933 6.94282 18.6256 6.78025 18.6256 6.61607C18.6256 6.45189 18.5933 6.28933 18.5304 6.13765C18.4676 5.98597 18.3755 5.84816 18.2594 5.73209ZM7.74141 16.2501H4.25001V12.7586L11.125 5.88365L14.6164 9.37506L7.74141 16.2501ZM15.5 8.49146L12.0094 5.00006L13.8844 3.12506L17.375 6.61646L15.5 8.49146Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setDiagId(diag.id);
                              setMols(true);
                              setTimeout(() => {
                                document
                                  .getElementById("my_modal_6")
                                  .showModal();
                              }, 100);
                            }}
                            className="p-[5px] bg-[#288994] rounded-[8px]"
                          >
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8211 9.74688C19.7937 9.68516 19.132 8.21719 17.6609 6.74609C15.7008 4.78594 13.225 3.75 10.5 3.75C7.77499 3.75 5.29921 4.78594 3.33905 6.74609C1.86796 8.21719 1.20312 9.6875 1.1789 9.74688C1.14336 9.82681 1.125 9.91331 1.125 10.0008C1.125 10.0883 1.14336 10.1748 1.1789 10.2547C1.20624 10.3164 1.86796 11.7836 3.33905 13.2547C5.29921 15.2141 7.77499 16.25 10.5 16.25C13.225 16.25 15.7008 15.2141 17.6609 13.2547C19.132 11.7836 19.7937 10.3164 19.8211 10.2547C19.8566 10.1748 19.875 10.0883 19.875 10.0008C19.875 9.91331 19.8566 9.82681 19.8211 9.74688ZM10.5 15C8.0953 15 5.99452 14.1258 4.25546 12.4023C3.5419 11.6927 2.93483 10.8836 2.45312 10C2.9347 9.11636 3.54179 8.30717 4.25546 7.59766C5.99452 5.87422 8.0953 5 10.5 5C12.9047 5 15.0055 5.87422 16.7445 7.59766C17.4595 8.307 18.0679 9.11619 18.5508 10C17.9875 11.0516 15.5336 15 10.5 15ZM10.5 6.25C9.75831 6.25 9.03329 6.46993 8.4166 6.88199C7.79992 7.29404 7.31927 7.87971 7.03544 8.56494C6.75162 9.25016 6.67735 10.0042 6.82205 10.7316C6.96674 11.459 7.32389 12.1272 7.84834 12.6517C8.37279 13.1761 9.04097 13.5333 9.7684 13.6779C10.4958 13.8226 11.2498 13.7484 11.9351 13.4645C12.6203 13.1807 13.2059 12.7001 13.618 12.0834C14.0301 11.4667 14.25 10.7417 14.25 10C14.249 9.00576 13.8535 8.05253 13.1505 7.34949C12.4475 6.64645 11.4942 6.25103 10.5 6.25ZM10.5 12.5C10.0055 12.5 9.52219 12.3534 9.11107 12.0787C8.69994 11.804 8.37951 11.4135 8.19029 10.9567C8.00107 10.4999 7.95157 9.99723 8.04803 9.51227C8.14449 9.02732 8.38259 8.58186 8.73222 8.23223C9.08186 7.8826 9.52731 7.6445 10.0123 7.54804C10.4972 7.45157 10.9999 7.50108 11.4567 7.6903C11.9135 7.87952 12.304 8.19995 12.5787 8.61107C12.8534 9.0222 13 9.50555 13 10C13 10.663 12.7366 11.2989 12.2678 11.7678C11.7989 12.2366 11.163 12.5 10.5 12.5Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              deleteDiagnoz(diag.id);
                            }}
                            className="p-[5px] bg-[#444444] rounded-[8px]"
                          >
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.33331 17.5C5.87498 17.5 5.48262 17.3368 5.15623 17.0104C4.82984 16.684 4.66665 16.2917 4.66665 15.8333V5H3.83331V3.33333H7.99998V2.5H13V3.33333H17.1666V5H16.3333V15.8333C16.3333 16.2917 16.1701 16.684 15.8437 17.0104C15.5173 17.3368 15.125 17.5 14.6666 17.5H6.33331ZM14.6666 5H6.33331V15.8333H14.6666V5ZM7.99998 14.1667H9.66665V6.66667H7.99998V14.1667ZM11.3333 14.1667H13V6.66667H11.3333V14.1667Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-[16px] mt-[10px]">
          <button
            onClick={() => {
              setModals(true);
              setTimeout(() => {
                document.getElementById("my_modal_4").showModal();
              }, 100);
            }}
            className="py-[6px] px-[20px] bg-[#1E40AD] rounded-[8px] text-[#fff] font-mono text-[16px] font-semibold"
          >
            Yangi tashxis yozish
          </button>
          <button
            onClick={() => {
              setMod(true);
              setTimeout(() => {
                document.getElementById("my_modal_1").showModal();
              }, 200);
            }}
            className="py-[6px] px-[20px] bg-[#288994] rounded-[8px] text-[#fff] font-mono text-[16px] font-semibold"
          >
            Qabulga olish
          </button>
        </div>
      </div>
      {modals && <Tashxis idTash={id} setDel={setDel} setModals={setModals} />}
      {mod && <QabulModal setMod={setMod} setDel={setDel} user={user} />}
      {mols && (
        <TashxisMod
          crud={crudTash}
          diag={diagId}
          setCrudTash={setCrudTash}
          setDel={setDel}
          setMols={setMols}
        />
      )}
    </div>
  );
}

export default Patient;
