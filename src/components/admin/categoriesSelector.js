import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export function CategoriesSelector({ value, onChange }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/categories`).then((res) => {
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
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Form.Select>
    </>
  );
}
