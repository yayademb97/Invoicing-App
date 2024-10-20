import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export default function TableForm() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  //* Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };

    //* Reset the Form
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount(0);
    setList([...list, newItems]);
    setIsEditing(false);
  };

  //* Calculate Items Amount function
  useEffect(() => {
    const calculateAmount = () => {
      setAmount(quantity * price);
    };
    calculateAmount();
  }, [quantity, price]);

  //* Calculate Total Amount of Items in Table
  useEffect(() => {
    const sum = list.reduce((acc, item) => acc + (parseFloat(item.amount) || 0), 0);
    setTotal(sum);
  }, [list]);

  //* Edit Function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setAmount(editingRow.amount);
  };

  //* Delete Function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-16'>
          <label htmlFor='description'>Description des articles</label>
          <input
            type="text"
            name='description'
            id='description'
            placeholder='Description des articles'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
            <label htmlFor='quantity'>Quantité</label>
            <input
              type="text"
              name='quantity'
              id='quantity'
              placeholder="Quantité de l'article"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='price'>Prix</label>
            <input
              type="text"
              name='price'
              id='price'
              placeholder="Prix de l'article"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='amount'>Montant</label>
            <p>{amount}</p>
          </div>
        </div>

        <button
          type='submit'
          className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        >
          {isEditing ? "Modifier un élément de Tableau" : "Ajouter une ligne de Tableau"}
        </button>
      </form>

      {/* Table Items */}
      <table width="100%" className='mb-10'>
        <thead>
          <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Description des articles</td>
            <td className='font-bold'>Quantité</td>
            <td className='font-bold'>Prix</td>
            <td className='font-bold'>Montant</td>
            <td className='font-bold'>Actions</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className='text-red-500 font-bold text-xl' />
                  </button>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className='text-green-500 font-bold text-xl' />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          {total.toLocaleString('fr-TN', { style: 'currency', currency: 'TND' })}
        </h2>
      </div>
    </div>
  );
}
