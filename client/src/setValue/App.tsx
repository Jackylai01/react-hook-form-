import * as React from "react";
import "../App.css";
import Headers from "./Header";
import { useForm } from "react-hook-form";

let renderCount = 0;

type FormValues = {
  yourDetails: {
    firstName: string;
    lastName: string;
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    setValue, //setValue在大多數情況下不會觸發重新渲染
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      yourDetails: {
        firstName: "",
        lastName: "",
      },
    },
  });

  renderCount++;

  return (
    <>
      <div>
        <Headers renderCount={renderCount} />
        <form
          onSubmit={handleSubmit((data) => {
            console.log("submit", data);
          })}
        >
          <input
            {...register("yourDetails.firstName", { required: true })}
            placeholder="First Name"
          />
          <input
            {...register("yourDetails.lastName", { required: true })}
            placeholder="First Name"
          />
          <button
            onClick={() => {
              setValue("yourDetails.firstName", "jacky");
              setValue("yourDetails.lastName", "lai");
            }}
            type="button"
            className="button input"
          >
            setValue
          </button>
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}
