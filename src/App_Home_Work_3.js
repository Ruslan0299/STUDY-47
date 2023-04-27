//третє завдання

// import React from "react";
// import { Formik, Form, Field } from "formik";

// function App() {
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

//   function handleSubmit(values) {
//     if (
//       isValidName(values.name) &&
//       isValidlogin(values.login) &&
//       isValidAge(values.age) &&
//       isValidEmail(values.email)
//     ) {
//       console.log("Form is valid");

//       const formData = {
//         name: values.name,
//         login: values.login,
//         age: values.age,
//         email: values.email,
//       };
//       console.log(formData);
//     } else {
//       console.log("Form is invalid");
//     }
//   }

//   return (
//     <div className="wrapper">
//       <Formik
//         initialValues={{
//           name: "",
//           login: "",
//           age: "",
//           email: "",
//         }}
//         onSubmit={(values) => handleSubmit(values)}
//         validate={(values) => {
//           const errors = {};
//           if (!isValidName(values.name)) {
//             errors.name = "Please enter a valid name";
//           }
//           if (!isValidlogin(values.login)) {
//             errors.login = "Please enter a valid login";
//           }
//           if (!isValidAge(values.age)) {
//             errors.age = "Please enter a valid age";
//           }
//           if (!isValidEmail(values.email)) {
//             errors.email = "Please enter a valid email";
//           }
//           return errors;
//         }}
//       >
//         {({ values, handleChange, handleSubmit, errors, touched }) => (
//           <Form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <Field
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//               className={touched.name && errors.name ? "invalid" : ""}
//             />
//             {touched.name && errors.name && (
//               <span className="error-message">{errors.name}</span>
//             )}

//             <label>Login</label>
//             <Field
//               name="login"
//               value={values.login}
//               onChange={handleChange}
//               className={touched.login && errors.login ? "invalid" : ""}
//             />
//             {touched.login && errors.login && (
//               <span className="error-message">{errors.login}</span>
//             )}

//             <label>Age</label>
//             <Field
//               type="number"
//               name="age"
//               value={values.age}
//               onChange={handleChange}
//               className={touched.age && errors.age ? "invalid" : ""}
//             />
//             {touched.age && errors.age && (
//               <span className="error-message">{errors.age}</span>
//             )}

//             <label>Email</label>
//             <Field
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               className={touched.email && errors.email ? "invalid" : ""}
//             />
//             {touched.email && errors.email && (
//               <span className="error-message">{errors.email}</span>
//             )}

//             <button type="submit">Sign in</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;
