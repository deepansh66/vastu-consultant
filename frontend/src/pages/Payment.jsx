import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Page</h2>

      <p>Name: {data?.name}</p>
      <p>Date: {data?.date}</p>
      <p>Time: {data?.time}</p>

      <button onClick={() => navigate("/success")}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;