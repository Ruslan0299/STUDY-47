//четверте завдання
import React  from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Form is valid");
    console.log(data);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: true,
            pattern: {
              value: /^[a-zA-Z]*$/,
              message: "Please enter a valid name",
            },
          })}
          onBlur={handleSubmit(onSubmit)}
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}

        <label>Login</label>
        <input
          type="text"
          name="login"
          {...register("login", {
            required: true,
            minLength: {
              value: 5,
              message: "Please enter a valid login",
            },
          })}
          onBlur={handleSubmit(onSubmit)}
          className={errors.login ? "invalid" : ""}
        />
        {errors.login && (
          <span className="error-mesage">{errors.login.message}</span>
        )}

        <label>Age</label>
        <input
          type="number"
          name="age"
          {...register("age", {
            required: true,
            min: {
              value: 18,
              message: "Please enter a valid age",
            },
          })}
          onBlur={handleSubmit(onSubmit)}
          className={errors.age ? "invalid" : ""}
        />
        {errors.age && (
          <span className="error-message">{errors.age.message}</span>
        )}

        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email",
            },
          })}
          onBlur={handleSubmit(onSubmit)}
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
