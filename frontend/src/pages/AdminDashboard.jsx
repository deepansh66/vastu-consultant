import { useEffect, useState }
from "react";

import axios from "axios";

import "../styles/Admin.css";

function AdminDashboard(){

  const [appointments,
  setAppointments] =
  useState([]);

  useEffect(()=>{

    fetchAppointments();

  },[]);

  const fetchAppointments =
  async()=>{

    try{

      const response =
      await axios.get(

        "http://localhost:5000/api/admin/appointments"

      );

      setAppointments(
        response.data
      );

    }

    catch(err){

      console.log(err);

    }

  };

  return(

    <section className="admin-section">

      <h1>
        Admin Dashboard
      </h1>

      <div className="admin-cards">

        <div className="admin-card">

          <h2>
            Total Appointments
          </h2>

          <p>
            {appointments.length}
          </p>

        </div>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Date</th>

              <th>Time</th>

              <th>Consultation</th>

            </tr>

          </thead>

          <tbody>

            {
              appointments.map(
                (item)=>(
                  <tr key={item._id}>

                    <td>
                      {item.name}
                    </td>

                    <td>
                      {item.date}
                    </td>

                    <td>
                      {item.time}
                    </td>

                    <td>
                      {item.consultationType}
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </section>

  );
}

export default AdminDashboard;