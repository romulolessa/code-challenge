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
    <div>
      <div>
        <Link to="/create">New Payment</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Card Number</th>
              <th>Currency</th>
              <th>Amount</th>
            </tr>
          </thead>
            {payments.map(payment => {
                return (
                  <tbody key={payment.id}>
                       <tr>
                        <td>{payment.id}</td>
                        <td>{payment.name}</td>
                        <td>{payment.cardNumber}</td>
                        <td>{payment.currency}</td>
                        <td>{payment.amount}</td>
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
