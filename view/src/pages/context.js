import React, { createContext, useContext, useState } from "react";

// Create a new context for the signup data
const SignUpContext = createContext();

// Custom hook to access the signup data
export function useSignUpContext() {
  return useContext(SignUpContext);
}

// The provider component to wrap around the application
export function SignUpProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    isJobseeker: false,
    isCompany: false,
  });

  const onSubmit = (data) => {
    setUserData(data);
  };

  return (
    <SignUpContext.Provider value={{ userData, onSubmit }}>
      {children}
    </SignUpContext.Provider>
  );
}

// import React, { useState, useContext, createContext } from "react";

// // Step 1: Create a context for the form data
// const SignUpContext = createContext();

// // Step 2: Create a custom hook to use the context
// export const useSignUpContext = () => {
//   const context = useContext(SignUpContext);
//   if (!context) {
//     throw new Error("useSignUpContext must be used within a SignUpProvider");
//   }
//   return context;
// };

// export const SignUpProvider = ({ children }) => {
//   // Step 3: Create hooks for name, email, and password
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isJobseeker, setIsJobseeker] = useState(false);
//   const [isCompany, setIsCompany] = useState(false);

//   // Step 4: Implement the onSubmit function for form submission
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // Your form submission logic goes here
//     const formData = { name, email, password };
//     console.log("Form Data:", formData);
//     // Perform your API call or other actions here
//   };

//   return (
//     <SignUpContext.Provider
//       value={{
//         name,
//         setName,
//         email,
//         setEmail,
//         password,
//         setPassword,
//         isJobseeker,
//         setIsJobseeker,
//         isCompany,
//         setIsCompany,
//         onSubmit,
//       }}
//     >
//       {children}
//     </SignUpContext.Provider>
//   );
// };
