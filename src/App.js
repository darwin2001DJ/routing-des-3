import React from "react";
import DisplayCustomer from "./DisplayCustomer";
import { CustomerProvider } from "./CustomerContext";
export default function App() {
  return (
    <>
      <CustomerProvider>
        <DisplayCustomer />
      </CustomerProvider>
    </>
  );
}
