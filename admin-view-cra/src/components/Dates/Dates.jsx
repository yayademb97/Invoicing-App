import React from 'react';

export default function Dates(props) {
    const { invoiceNumber, invoiceDate, dueDate } = props;
    return (
        <>
            <article className="mt-10 mb-14 flex-col items-end justify-end">
                <li className='p-1 '>
                    <span className="font-bold">Numéro de facture: </span> {invoiceNumber}
                </li>
                <li className='p-1 bg-gray-100'>
                    <span className="font-bold"> Date de la facture: </span> {invoiceDate}
                </li>
                <li className='p-1 '>
                    <span className="font-bold">Date d'échéance: </span> {dueDate}
                </li>
            </article>
        </>
    );
}
