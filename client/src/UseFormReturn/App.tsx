import React from 'react';
import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  ),
);

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  sex: string;
};
/**使用useForm hook 獲取methods（UseFormReturn類型的對象），
 * 然後傳遞給children函數。這樣做的目的是為了將useForm返回所有方法和屬性
 * ，如register、handleSubmit、watch等，然後可以讓children傳遞函數給表格的子組件，
 * 這樣的子組件就可以使用這些方法和屬性來控製表的行為。 */

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register }) => (
        <>
          <Input {...register('firstName')} />
          <Input {...register('lastName')} />
          <Select
            {...register('sex')}
            options={[
              { label: 'Female', value: 'female' },
              { label: 'Male', value: 'male' },
              { label: 'Other', value: 'other' },
            ]}
          />
          <Input type='submit' />
        </>
      )}
    </Form>
  );
}
