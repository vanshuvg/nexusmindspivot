import { useEffect, useState } from "react";
import axios from "axios";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reservation/list`)
      .then((res) => setReservations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reservations</h1>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Customer</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Table</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id}>
              <td className="p-2 border">{res.customer_name}</td>
              <td className="p-2 border">{res.date}</td>
              <td className="p-2 border">{res.time}</td>
              <td className="p-2 border">{res.table_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}