import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export function CustomerProvider(props) {
  const [customerDetail, setCustomerDetail] = useState([
    {
      id: 1,
      address: "1st cross,Gandhipuram",
      email: "david@gmail.com",
      mobile_number: "9897656787",
      name: "David",
      password: "david",
      username: "David",
      role_id: 3,
      loanType: "Education Loan",
      requestStatus: "Pending",
    },
    {
      id: 2,
      address: "1st street,Peelamedu",
      email: "clay@gmail.com",
      mobile_number: "9897656734",
      name: "Clay",
      password: "clay",
      username: "Clay",
      role_id: 3,
      loanType: "Home Loan",
      requestStatus: "Pending",
    },
    {
      id: 3,
      address: "2nd cross,Gandhipuram",
      email: "peter@gmail.com",
      mobile_number: "9889656787",
      name: "Peter",
      password: "peter",
      username: "Peter",
      role_id: 3,
      loanType: "Property Loan",
      requestStatus: "Pending",
    },
    {
      id: 4,
      address: "Race Course",
      email: "jecy@gmail.com",
      mobile_number: "9897656711",
      name: "Jacy",
      password: "jacy",
      username: "Jacy",
      role_id: 3,
      loanType: "Gold Loan",
      requestStatus: "Pending",
    },
    {
      id: 5,
      address: "Ganapaty",
      email: "lena@gmail.com",
      mobile_number: "9891116787",
      name: "Lena",
      password: "lena",
      username: "Lena",
      role_id: 3,
      loanType: "Vehicle Loan",
      requestStatus: "Pending",
    },
    {
      id: 6,
      address: "Rs Puram",
      email: "sophie@gmail.com",
      mobile_number: "9897656722",
      name: "Sophie",
      password: "sophie",
      username: "Sophie",
      role_id: 3,
      loanType: "Home Loan",
      requestStatus: "Pending",
    },
    {
      id: 7,
      address: "3rd cross,Kovaipudur",
      email: "liam@gmail.com",
      mobile_number: "9822656799",
      name: "Liam",
      password: "liam",
      username: "Liam",
      role_id: 3,
      loanType: "Property Loan",
      requestStatus: "Pending",
    },
  ]);
  return (
    <CustomerContext.Provider value={[customerDetail, setCustomerDetail]}>
      {props.children}
    </CustomerContext.Provider>
  );
}
