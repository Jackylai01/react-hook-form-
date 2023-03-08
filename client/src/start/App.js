import "../App.css";
import Headers from "./Header";
import { useForm } from "react-hook-form";

let renderCount = 0;

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Jacky",
      lastName: "Lai",
    },
  });
  renderCount++;

  console.log(watch());

  return (
    <>
      <div>
        <Headers
          renderCount={renderCount}
          description="Performant, flexiblkke and extensible forms with easy-t"
        />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <input
            {...register("firstName", { required: "請輸入姓名" })}
            placeholder="First Name"
          />
          <p>{errors.firstName?.message}</p>
          <input
            {...register("lastName", {
              required: "請輸入姓名",
              minLength: {
                value: 4,
                message: "長度至少要有4",
              },
            })}
            placeholder="Last Name"
          />
          <p>{errors.lastName?.message}</p>
          <input type="submit" className="button" />
        </form>
      </div>
    </>
  );
}

export default App;
