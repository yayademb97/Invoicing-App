import React from 'react'


const MainDetails = (props) => {
    const { name, address, street, email } = props
    
    return (
        <>
            <section className="flex flex-col items-end justify-end">
                <input type="text" id="text" placeholder="Entrer le nom" required />
                <h2 className="font-bold text-xl uppercase md:text--4xl">{name}</h2>
                <p>{address}</p>
                <p>{street}</p>
                <p>{email}</p>
                <p>+216 24-525-660 / +216 22-353-338</p>
                <p>MF 1662242/F/A/0/000</p>
            </section>
        </>
    )
}

export default MainDetails