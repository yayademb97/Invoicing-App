import React ,{ useState, useRef } from "react";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import Dates from "./components/Dates/Dates";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainDetails from "./components/MainDetails/MainDetails";
import Notes from "./components/Notes/Notes";
import Table from "./components/Table/Table";
import TableForm from "./components/TableForm/TableForm";



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
  const [clientStreet, setclientStreet] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  // const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {/* <ReactToPrint
          trigger={() => <button>Imprimer / Télécharger</button>}
          content={() => componentRef.current}
        /> */}

        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails
              name={name}
              address={address}
              street={street}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
            />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
              clientStreet={clientStreet}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              total={total}
              setTotal={setTotal}
            />
            <Notes notes={notes} />
            <Footer
              name={name}
              address={address}
              website={website}
              email={email}
              phone={phone}
              bankAccount={bankAccount}
              bankName={bankName}
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
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Votre Nom Complet:</label>

                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Entrer votre nom"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
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
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
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
                </div>
                <div className="flex flex-col">
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
                </div>
                <div className="flex flex-col">
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
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
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
                </div>
                <div className="flex flex-col">
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
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Numéro de Compte Bancaire:
                  </label>

                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Entrer le numéro de votre Compte Bancaire"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Nom du client:</label>

                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Nom du client"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Adresse du Client:</label>

                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Adresse du Client"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Rue du Client:</label>

                  <input
                    type="text"
                    name="clientStreet"
                    id="clientStreet"
                    placeholder="Rue du Client"
                    autoComplete="off"
                    value={clientStreet}
                    onChange={(e) => setclientStreet(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Numéro de la Facture:</label>

                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Numéro de la Facture"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Date de la facture:</label>

                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Date de la facture"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Date d'échéance:</label>

                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Date d'échéance"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is oour Table Form */}
              <article>
                <TableForm
                  description={description}
                  quantity={quantity}
                  price={price}
                  amount={amount}
                  setDescription={setDescription}
                  setQuantity={setQuantity}
                  setPrice={setPrice}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Notes Additionnelles:</label>
              <textarea
                name="notes"
                value={notes}
                id="notes"
                cols="30"
                rows="10"
                placeholder="Notes Additionnelles pour le client"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

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
