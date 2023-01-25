import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

axios.interceptors.request.use((config) => {
  console.log("Request sent to: ", config.url);
  return config;
});

export function Test() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/languages").then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);

  return (
    <>
      {list.map((listItem) => (
        <Card className="text-center col-4">
          <Card.Body>{listItem.item}</Card.Body>
        </Card>
      ))}
    </>
  );
}
