import { useNavigate } from "react-router";

function PaymentCreate() {
  const navigate = useNavigate();

  const submit = (ev) => {
    ev.preventDefault();

    const payment = Object.fromEntries(new FormData(ev.target));
    console.log(payment);

    fetch("http://localhost:3001/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-1xl font-bold text-center">Created New Payments</h1>
      </div>
      <form onSubmit={submit} className="max-w-md mx-auto">
        <div  className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text" name="name" />
        </div>
        <div  className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Card Number</label>
          <input       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text" name="cardNumber" />
        </div>
        <div  className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Currency</label>
          <select  name="currency">
            <option value=""></option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div  className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Amount</label>
          <input       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text" name="amount" />
        </div>
        <div className="flex justify-center">
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}

export default PaymentCreate;
