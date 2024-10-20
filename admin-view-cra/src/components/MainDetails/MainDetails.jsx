import React from 'react';

export default function MainDetails(props) {
    const { name, address, street, email, phone, bankAccount } = props;

    return (
        <>
            <section className="flex flex-col items-end justify-end">
                <h2 className="font-bold text-xl uppercase mb-1 md:text--4xl">{name}</h2>
                <p>{address}</p>
                <p>{street}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>Num-Compte: {bankAccount}</p>
            </section>
        </>
    );
}
