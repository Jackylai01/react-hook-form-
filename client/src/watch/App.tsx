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
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      firstName: "jacky",
      lastName: "Lai",
      age: 0,
    },
  });
  renderCount++;

  //取及時的status更新到網頁上
  // const [firstName, lastName, age] = watch(["firstName", "lastName", "age"]);

  //onCheage input 的state，要用陣列包覆著，才能取多個input的值
  // // console.log(watch(["firstName", "lastName"]));

  //useEffect-watch改變input的state就執行

  React.useEffect(() => {
    const subcription = watch((data) => {
      console.log(data);
    });
    return () => {
      subcription.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <div>
        <Headers renderCount={renderCount} />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input {...register("firstName")} placeholder="First Name" />
          <input {...register("lastName")} placeholder="Last Name" />
          <input {...register("age")} placeholder="age" />
          {/* <p>第一個名子:{firstName}</p>
          <p>最後的名子:{lastName}</p>
          <p>年齡:{age}</p> */}
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}
