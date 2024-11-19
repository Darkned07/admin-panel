import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TabPhList from "../components/TabPhList";

function Home() {
  const [name, setName] = useState(null);
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

  return (
    <div className="lg:max-w-[1200px] lg:w-full">
      <Navbar setName={setName} />
      {users && <TabPhList lists={users.patients} />}
      {!users && (
        <span className="loading flex items-center justify-center mx-auto loading-bars loading-lg"></span>
      )}
    </div>
  );
}

export default Home;
