import { useEffect, useState } from "react";
import Mainsection from "./components/Mainsection/Mainsection";
import Navbar from "./components/Navbar/Navbar";
import { ItemContext } from "./context/ItemContext";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(
        "https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app/api/v1/Item",
        {
          headers: {
            dbName: "tradeapptestdb",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (typeof data === "object" && !Array.isArray(data)) {
            data = Object.values(data);
          }
          setItems(data);
        });
    }
    getData();
  }, []);
  
  return (
    <ItemContext.Provider value={{items:items[0]}}>
    <div className="App">
      <Navbar />
      <Mainsection />
    </div>
    </ItemContext.Provider>
  );
}

export default App;
