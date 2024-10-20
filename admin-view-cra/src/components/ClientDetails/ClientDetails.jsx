import React from 'react';

export default function ClientDetails(props) {
    const { clientName, clientAddress, clientStreet } = props;
    return (
        <>
            <section className="mt-10">
                <h2 className="text-2xl uppercase font-bold mb-1">Nom du Client: {clientName}</h2>
                <p>Addresse du Client: {clientAddress}</p>
                <p>Rue du Client: {clientStreet}</p>
            </section>
        </>
    );
}
