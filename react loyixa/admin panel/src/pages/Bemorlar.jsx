import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jadval from "../components/Jadval";

function Bemorlar() {
  const [name, setName] = useState(null);
  const [del, setDel] = useState(null);
  const url = "https://dad-urolog.uz/api/apiadmin/get_all_patients_view_id/";
  const search_url =
    "https://dad-urolog.uz/api/apiadmin/search_patients/?search=";
  const [users, setUsers] = useState(null);
  useEffect(() => {
    if (!name) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    } else {
      fetch(search_url + name, {
        method: "GET",
      })
        .then((data) => data.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }
  }, [url, name]);

  useEffect(() => {
    if (del) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }
  }, [del]);
  return (
    <div className="lg:max-w-[1200px] lg:w-full">
      <Navbar />
      <Jadval users={users} setDel={setDel} setName={setName} />
    </div>
  );
}

export default Bemorlar;
