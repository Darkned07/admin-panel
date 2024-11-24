import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import Booking from "../components/Booking";

function Qabul() {
  const [search, setSearch] = useState(null);
  const [modal, setModal] = useState(false);
  const [doc, setDoc] = useState(null);
  const [del, setDel] = useState(null);
  const [data, setData] = useState(null);

  const url = "https://dad-urolog.uz/api/apiadmin/search_patients/?search=";

  useEffect(() => {
    if (del) {
      fetch("https://dad-urolog.uz/api/apiadmin/getbookings/")
        .then((data) => data.json())
        .then((data) => setDoc(data))
        .catch((err) => console.log(err));
    }
  }, [del]);

  useEffect(() => {
    if (!search) {
      fetch("https://dad-urolog.uz/api/apiadmin/getbookings/")
        .then((data) => data.json())
        .then((data) => {
          setDoc(data);
        })
        .catch((err) => console.log(err));
    } else {
      fetch(url + search + "&method=booking", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((data) => {
          setDoc(data);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);
  const sub = (data, i) => {
    fetch("https://dad-urolog.uz/api/apiadmin/bookinedit/" + i, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        setDel(data);
        toast.success("Status almashtirildi :)");
      })
      .catch((err) => console.log(err));
  };

  const statusSelect = (status, i) => {
    sub({ status: status.target.value }, i);
  };

  const deletes = (i) => {
    console.log(i);

    fetch("https://dad-urolog.uz/api/apiadmin/bookinedit/" + i, {
      method: "DELETE",
    })
      .then((data) => {
        setDel(data);
        toast.success("O'chirib yuborildi");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      {doc && (
        <Booking
          deletes={deletes}
          statusSelect={statusSelect}
          sub={sub}
          doc={doc.bookings}
          setModal={setModal}
          setSearch={setSearch}
          modal={modal}
          setDel={setDel}
        />
      )}
    </div>
  );
}

export default Qabul;
