"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "@/service-components/Heading";
import FetchApi from "@/getData/FetchApi";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ibn Sina Mirpur",
//   description: "Ibn sina diagnostic and consultation center, mirpur",
// };


export default async function RootLayout({ children }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    
    console.log("this", value);
  }, [value])
  
  
  const doctors =  await FetchApi();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="text-center p-10 bg-blue-600 text-white"><Heading/></div>
          <section className="grid grid-cols-2 gap-4 *:p-5 *:border">
            <div className="h-[600px] overflow-auto p-4">
              <input type="text" onChange={(e)=> setValue(e.target.value)} placeholder="Search doctor by name" className="input input-bordered w-full max-w-xs" />
              <div className="p-5">
                {doctors?.map(doctor => <Link href={`/doctor/${doctor._id}`} key={doctor._id} className="p-3 hover:bg-slate-50 block">{ doctor.d_name}</Link>)}
              </div>
            </div>
          <div>{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
