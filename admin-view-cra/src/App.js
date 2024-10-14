import { useState } from "react";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import Dates from "./components/Dates/Dates";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainDetails from "./components/MainDetails/MainDetails";
import Notes from "./components/Notes/Notes";
import Table from "./components/Table/Table";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails
              name={name}
              address={address}
              street={street}
              email={email}
            />
            <ClientDetails />
            <Dates />
            <Table />
            <Notes />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
            />
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 
              text-white font-bold py-2 
              px-8 rounded shadow border-2 border-blue-500 
              hover:bg-transparent hover:text-blue-500 
              transition-all duration-300"
            >
              Modifier les informations
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Nom:</label>

              <input
                type="text"
                name="text"
                id="name"
                placeholder="Entrer votre nom"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="phone">Numéro de Téléphone:</label>

              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Entrer votre numéro de téléphone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="bankName">Nom de la Banque:</label>

              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Entrer le nom de votre Banque"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="bankAccount">Numéro de Compte Bancaire:</label>

              <input
                type="text"
                name="bankAccount"
                id="bankAccount"
                placeholder="Entrer le numéro de votre Compte Bancaire"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />

              <label htmlFor="address">Adresse:</label>

              <input
                type="text"
                name="address"
                id="address"
                placeholder="Entrer votre Adresse"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="street">Rue:</label>

              <input
                type="text"
                name="street"
                id="street"
                placeholder="Entrer votre Rue"
                autoComplete="off"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <label htmlFor="website">Site Web:</label>

              <input
                type="url"
                name="website"
                id="website"
                placeholder="xyz@example.com"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              <label htmlFor="email">Email:</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrer votre Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 
              text-white font-bold py-2 
              px-8 rounded shadow border-2 border-blue-500 
              hover:bg-transparent hover:text-blue-500 
              transition-all duration-300"
              >
                Aperçu de la facture
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
