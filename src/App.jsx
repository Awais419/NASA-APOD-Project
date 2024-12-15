import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [showslide, setShowslide] = useState(false);
  const [fetchdata, setFetchData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setShowslide(!showslide);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      const NASAKEY = import.meta.env.VITE_NASA_API_KEY;

      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod" +
            `?api_key=${NASAKEY}&date=2024-2-4`
        );
        setFetchData(response.data);
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchApiData();
  }, []);

  return (
    <>
      {fetchdata ? (
        <Main data={fetchdata} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showslide ? (
        <SideBar handleToggle={handleToggle} data={fetchdata} />
      ) : (
        showslide
      )}
      {fetchdata && <Footer handleToggle={handleToggle} data={fetchdata} />}
    </>
  );
};

export default App;
