import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TabPhList from "../components/TabPhList";

function Home() {
  const url = "http://localhost:3000/apis";
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="lg:max-w-[1200px] lg:w-full">
      <Navbar />
      {users && <TabPhList lists={users} />}
    </div>
  )
}

export default Home;