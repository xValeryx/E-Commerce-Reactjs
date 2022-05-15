import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [current, setCurrent] = useState("");
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    //data.unshift("Everything"); aggiungere elemento alla sidebar
    const updated = ["everything"].concat(data);
    setCategories(updated);
  };
    

  /**
   * useEffect(callback, []) === callback da eseguire appena il
   * componente è aggiunto alla pagina (tipo DOMContentLoaded ma
   * solo per il componente)
   *
   * useEffect è molto simile a un addEventListener
  */

  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category) => {
    event.preventDefault();
    props.catSelection(category);
    setCurrent(category);
  };
  

  return (
    <div className="sidebar">
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a 
            href={item}
            className={item === current ? "active" : ""} 
            onClick= {(event) => clicked(event, item)}>
            {item}
            </a>
          </li>
        ))} 
      </ul>
    </aside>
    </div>
  );
};