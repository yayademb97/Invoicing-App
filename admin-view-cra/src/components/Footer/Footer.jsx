import React from 'react'

const Footer = (props) => {
    const { name, address, website, email } = props
    return (
        <>
            <footer>
                <ul className="flex flex-wrap items-center justify-center">
                    <li>
                        <span className="font-bold">Nom:</span> {name}
                    </li>
                    <li>
                        <span className="font-bold">Email:</span> {email}
                    </li>
                    <li>
                        <span className="font-bold">Numéro de Téléphone:</span> +216 24-525-660 / +216
                        22-353-338:
                    </li>
                    <li>
                        <span className="font-bold">Compte Bancaire:</span> MF 1662242/F/A/0/000
                    </li>
                    <li>
                        <span className="font-bold">Site-Web:</span>
                        <a href={website} target='_blank' rel="noopenner noreferrer">{website}</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer