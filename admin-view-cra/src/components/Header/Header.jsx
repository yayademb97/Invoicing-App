import React from 'react';
import { assets } from '../../assets/assets';

const Header = (props) => {
    const { handlePrint } = props;
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                    <img src={assets.logoApp} alt="" />
                    <h2 className="font-bold uppercase tracking-wide text-2xl mb-3">
                        TRABELSI EVENT'S Invoicer
                    </h2>
                </div>

                <div>
                    <ul className="flex items-center justify-between flex-wrap">
                        <li>
                            <button
                                className="bg-gray-500 
                             text-white font-bold py-2 
                             px-8 rounded shadow border-2 border-gray-500 
                             hover:bg-transparent hover:text-gray-500 
                             transition-all duration-300"
                                onClick={handlePrint}>
                                Imprimer
                            </button>
                        </li>
                        <li className='mx-2'>
                            <button
                                className="bg-blue-500 
                            text-white font-bold py-2 
                            px-8 rounded shadow border-2 border-blue-500 
                            hover:bg-transparent hover:text-blue-500 
                            transition-all duration-300"
                            >Télécharger</button>
                        </li>
                        <li>
                            <button
                                className="bg-green-500 
                            text-white font-bold py-2 
                            px-8 rounded shadow border-2 border-green-500 
                            hover:bg-transparent hover:text-green-500 
                            transition-all duration-300"
                            >Envoyer</button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
