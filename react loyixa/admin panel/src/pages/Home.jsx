import HomeComp from "../components/HomeComp";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="lg:max-w-[1200px] lg:w-full">
      <Navbar />
      <HomeComp/>
    </div>
  );
}

export default Home;
