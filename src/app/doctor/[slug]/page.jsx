"use client";
import FetchSingleApi from "@/getData/FetchSingleApi";
import { useParams } from "next/navigation";
const table = document.getElementById("table");
const serial = [...Array(50).keys()];

export default async function DoctorDetails() {
  const { slug } = useParams();
  const details = await FetchSingleApi(slug);
  const { d_name, d_visit, chamber_schedule, d_designation, d_degree } =
    details || {};

  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <div>
        <p>Doctor Name: {d_name}</p>
        <p>Doctor Visit: {d_visit}</p>
        <p>Doctor Designation: {d_designation}</p>
        <p>Doctor Degree: {d_degree}</p>
        <p>Chamber Schedule: {chamber_schedule}</p>
      </div>
      <section>
        <div className="overflow-auto h-[500px]">
          <table className="table" id="schedule-table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial no</th>
                <th>Pt. name</th>
                <th>Mobile num</th>
                <th>Time</th>
                <th>Pt condition</th>
                <th
                  onClick={handlePrint}
                  className="bg-green-400 text-white p-2 text-center rounded-md cursor-pointer print-button">
                  Print
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {serial.map((s) => (
                <tr key={s}>
                  <th>{s + 1}</th>
                  <td>Moor Na</td>
                  <td>017587412545</td>
                  <td>7:10</td>
                  <td>Followup</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
