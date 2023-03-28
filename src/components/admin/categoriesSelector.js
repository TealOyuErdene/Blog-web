import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export function CategoriesSelector({ value, onChange }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/categories?q=`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setCategories(data);
      } else {
        alert(`Error: ${status}`);
      }
    });
  }, []);
  return (
    <>
      <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Ангилалгүй</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </Form.Select>
    </>
  );
}
