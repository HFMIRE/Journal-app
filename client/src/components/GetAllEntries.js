import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import FeatureTab from "./FeatureTab";
const GetAllEntry = () => {
  const [entry, setEntry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function getAllEntriesData() {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`/users/${userid}/entries`, requestOption);
    if (response.ok) {
      const data = await response.json();
      setIsLoading(false);
      setEntry(data);
    } else {
      console.log("err");
    }
  }
  useEffect(() => {
    getAllEntriesData();
  }, [isLoading]);

  return (
    <div>
      <FeatureTab />
      {entry &&
        entry.length > 0 &&
        entry.map((note, index) => {
          return (
            <Cards
              key={index}
              index={note.id}
              name={note.name}
              description={note.description}
            />
          );
        })}

      <Cards entryData={entry} />
    </div>
  );
};

export default GetAllEntry;
