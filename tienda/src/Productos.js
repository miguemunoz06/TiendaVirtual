import React, { useState } from 'react';

const Productos = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const producto = {
      nombre,
      precio,
      categoria,
      stock,
    };
    // Aquí se debería implementar la lógica para crear el producto
    console.log('Producto creado:', producto);
    // Restablecer los campos del formulario
    setNombre('');
    setPrecio(0);
    setCategoria('');
    setStock(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />

      <label>Precio:</label>
      <input type="number" value={precio} onChange={(event) => setPrecio(event.target.value)} />

      <label>Categoria:</label>
      <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
        <option value="">Seleccionar categoría</option>
        <option value="electronica">Electrónica</option>
        <option value="hogar">Hogar</option>
        <option value="moda">Moda</option>
      </select>

      <label>Stock:</label>
      <input type="number" value={stock} onChange={(event) => setStock(event.target.value)} />

      <button type="submit">Crear producto</button>
    </form>
  );
};

export default Productos;