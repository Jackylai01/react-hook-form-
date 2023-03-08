import * as React from "react";
import "../App.css";
import Headers from "./Header";
import { useForm } from "react-hook-form";

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });
  renderCount++;

  console.log("errors", errors);

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
            {...register("firstName", {
              required: {
                value: true,
                message: "欄位不可為空",
              },
            })}
            placeholder="First Name"
          />

          <input
            {...register("lastName", {
              maxLength: {
                value: 5,
                message: "Max length is 5",
              },
            })}
            placeholder="Last Name"
          />
          <input
            type="number"
            {...register("age", {
              valueAsNumber: true,
            })}
          />
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}
