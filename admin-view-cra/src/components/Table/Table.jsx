import React from 'react';

export default function Table(props) {
  const { list, total, setTotal } = props;

  return (
    <>
      <table width="100%" className='mb-10'>
        <thead>
          <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Description des articles</td>
            <td className='font-bold'>Quantité</td>
            <td className='font-bold'>Prix</td>
            <td className='font-bold'>Montant</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id}>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          {total.toLocaleString('fr-TN', { style: 'currency', currency: 'TND' })}
        </h2>
      </div>
    </>
  );
}
