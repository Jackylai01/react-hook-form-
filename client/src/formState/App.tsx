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
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  React.useEffect(() => {
    console.log(errors);
  }, [errors, formState]);

  const onSubmit = async (data: any) => {
    return data;
  };

  return (
    <>
      <div>
        <Headers renderCount={renderCount} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First Name" />
          <input {...register("lastName")} placeholder="Last Name" />
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}
