import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log('data responded')
      setProducts(data)
    });

    return () => {
      console.log('컴포넌트가 없어질 때 메모리 정리, 소켓 해제, 이벤트 해제 등등...을 리턴으로 처리')
      console.log('unmount')
    }
  }, [checked]);

  return (
    <>
    <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
    <label htmlFor="checkbox">Show only 🔥 sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

