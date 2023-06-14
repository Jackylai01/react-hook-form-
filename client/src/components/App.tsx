import React from 'react';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';

interface IFormValues {
  'First Name': string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

//跟 form 有關的組件，都要用useForm 來組合，然後再用register來註冊，這樣才能跟form連動，並且可以用handleSubmit來提交
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// 這裡用forwardRef來傳遞ref，因為select是html的組件，所以要用forwardRef來傳遞ref
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value='20'>20</option>
      <option value='30'>30</option>
    </select>
  </>
));

const App = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='First Name' register={register} required />
      <Select label='Age' {...register('Age')} />
      <input type='submit' />
    </form>
  );
};

export default App;
