import { useEffect, useState } from "react";

import Mainsection from "./components/Mainsection/Mainsection";
import Navbar from "./components/Navbar/Navbar";

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
    <div className="App">
      <Navbar />
      <Mainsection items={items[0]} />
    </div>
  );
}

export default App;
