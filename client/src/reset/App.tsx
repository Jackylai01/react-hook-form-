import * as React from "react";
import "../App.css";
import Headers from "./Header";
import { useForm } from "react-hook-form";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();

  renderCount++;

  return (
    <>
      <div>
        <Headers renderCount={renderCount} />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />

          <button type="button" className="button input">
            reset
          </button>
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}
