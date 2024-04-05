import React, { useEffect, useState } from 'react'
import style from './content.module.css';

const ContentComp = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const url = process.env.REACT_APP_URL;
    const productResult = await fetch(`${url}getProductsDetails`);
    const result = await productResult.json();
    if (result.msg) {
      setProducts(result.resultProduct);
    } else {
      alert("Wrong");
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  const [searchFood, setSearchFood] = useState('');
  const handleChange = (e) => {
    setSearchFood(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class={style.search_container}>
          <input type="text" onChange={handleChange} class={style.search_input} placeholder="Search item" />
          <button class={style.search_button}>Search</button>
        </div>
      </form>
      <section class={style.featured_recipes}>
        {
          products.map((ele, index) => {
            return (
              <>
                <div class={style.recipe_card}>
                  <img src={ele.image} alt="Recipe 2" />
                  <h3>{ele.title}</h3>
                  <p>{ele.description}.</p>
                  <a href={`/receipe/${ele._id}`}>View Recipe</a>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default ContentComp