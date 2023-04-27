//друге завдання

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [login, setLogin] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");

//   function isValidName(name) {
//     if (name.length < 1) {
//       return false;
//     }
//     if (/\d/.test(name)) {
//       return false;
//     }
//     return true;
//   }

//   function isValidlogin(login) {
//     if (login.length < 5) {
//       return false;
//     }
//     return true;
//   }

//   function isValidAge(age) {
//     if (age < 18) {
//       return false;
//     }
//     return true;
//   }

//   function isValidEmail(email) {
//     const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     if (regex.test(email)) {
//       return true;
//     }
//     return false;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     if (
//       isValidName(name) &&
//       isValidlogin(login) &&
//       isValidAge(age) &&
//       isValidEmail(email)
//     ) {
//       console.log("Form is valid");

//       const formData = {
//         name: name,
//         login: login,
//         age: age,
//         email: email,
//       };
//       console.log(formData);
//     } else {
//       console.log("Form is invalid");
//     }
//   }

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleSubmit}>

//         <label>Name</label>
//         <input
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           className={isValidName(name) || name === "" ? "" : "invalid"}
//         />
//         {!isValidName(name) && name !== "" && (
//           <span className="error-message">Please enter a valid name</span>
//         )}

//         <label>Login</label>
//         <input
//           value={login}
//           onChange={(event) => setLogin(event.target.value)}
//           className={isValidlogin(login) || login === "" ? "" : "invalid"}
//         />
//         {!isValidlogin(login) && login !== "" && (
//           <span className="error-message">Please enter a valid login</span>
//         )}

//         <label>Age</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(event) => setAge(event.target.value)}
//           className={isValidAge(age) || age === "" ? "" : "invalid"}
//         />
//         {!isValidAge(age) && age !== "" && (
//           <span className="error-message">Please enter a valid age</span>
//         )}

//         <label>Email</label>
//         <input
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           className={isValidEmail(email) || email === "" ? "" : "invalid"}
//         />
//         {!isValidEmail(email) && email !== "" && (
//           <span className="error-message">Please enter a valid email</span>
//         )}

//         <button type="submit">Sign in</button>
//       </form>
//     </div>
//   );
// }

// export default App;
