import React from 'react'
import { assets } from '../../assets/assets'
const Header = (props) => {
    const { handlePrint } = props
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                    <img src={assets.logoApp} alt="" />
                    <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">
                        TRABELSI EVENT'S Invoicer
                    </h2>
                </div>

                <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li>
                            <button className="btn btn-print" onClick={handlePrint}>
                                Imprimer
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-download">Télécharger</button>
                        </li>
                        <li>
                            <button className="btn btn-send">Envoyer</button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header