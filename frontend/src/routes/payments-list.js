import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PaymentsList() {
  // The list of payments is available from `GET /api/payments`
  const [payments, setPayments] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/api/payments")
      .then((response) => response.json())
      .then((data) => setPayments(data.payments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Payments</h1>
      <div>
        <Link to="/create" className="text-center underline  hover:text-green-600">New Payment</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th  className="bg-gray-500 text-neutral-100">ID</th>
              <th  className="bg-gray-500 text-neutral-100">Name</th>
              <th  className="bg-gray-500 text-neutral-100">Card Number</th>
              <th  className="bg-gray-500 text-neutral-100">Currency</th>
              <th  className="bg-gray-500 text-neutral-100">Amount</th>
            </tr>
          </thead>
            {payments.map(payment => {
                return (
                  <tbody key={payment.id}>
                       <tr>
                        <td className="px-10 bg-gray-100 text-stone-950">{payment.id}</td>
                        <td className="px-10 bg-gray-100 text-stone-950">{payment.name}</td>
                        <td className="px-10 bg-gray-100 text-stone-950">{payment.cardNumber}</td>
                        <td className="px-10 bg-gray-100 text-stone-950">{payment.currency}</td>
                        <td className="px-10 bg-gray-100 text-stone-950">{payment.amount}</td>
                        </tr>
                  </tbody>
                  
                  )
                })}
        </table>
      </div>
    </div>
  );
}

export default PaymentsList;
