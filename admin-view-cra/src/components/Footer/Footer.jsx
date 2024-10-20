import React from 'react';

export default function Footer(props) {
    const { name, address, website, email, phone, bankAccount, bankName } = props;
    return (
        <>
            <footer className='footer border-t-2 border-gray-300 pt-5'>
                <ul className="flex flex-wrap items-center justify-center">
                    <li>
                        <span className="font-bold">Titulaire de compte:</span> {name}
                    </li>
                    <li>
                        <span className="font-bold">Email:</span> {email}
                    </li>
                    <li>
                        <span className="font-bold">Numéro de Téléphone:</span> {phone}
                    </li>
                    <li>
                        <span className="font-bold">Adresse:</span> {address}
                    </li>
                    <li>
                        <span className="font-bold">Banque:</span> {bankName}
                    </li>
                    <li>
                        <span className="font-bold">Numéro de Compte:</span> {bankAccount}
                    </li>
                    <li>
                        <span className="font-bold">Site-Web:</span>
                        <a href={website} target='_blank' rel="noopener noreferrer">{website}</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
