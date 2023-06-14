import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

type Friend = {
  firstName: string;
  lastName: string;
};

type FormData = {
  friends: Friend[];
};

function MyForm() {
  // 使用 useForm hooks 初始化表单
  const { register, control, handleSubmit } = useForm<FormData>();
  // 使用 useFieldArray hooks 管理动态的朋友数组
  const { fields, append, remove, swap, insert, prepend, move } = useFieldArray(
    {
      control,
      name: 'friends',
    },
  );

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  /**insert（在欄位陣列的特定位置插入新欄位）、move（移動欄位陣列中的欄位）、swap（交換欄位陣列中的兩個欄位）、prepend（在欄位陣列的開頭添加新欄位）。
   * fields: 一個包含欄位陣列狀態的對象陣列。你可以使用這個屬性來讀取和顯示欄位陣列的狀態。
   * append: 一個函式，用來將新的欄位添加到欄位陣列的末尾。
   * remove: 一個函式，用來移除欄位陣列中的某個欄位。
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input
            {...register(`friends.${index}.firstName` as const)}
            defaultValue={item.firstName}
          />
          <input
            {...register(`friends.${index}.lastName` as const)}
            defaultValue={item.lastName}
          />
          <button type='button' onClick={() => remove(index)}>
            Remove Friend
          </button>
          <button type='button' onClick={() => swap(index, index - 1)}>
            Swap Friend
          </button>
          <button type='button' onClick={() => move(index, index + 1)}>
            Move Friend
          </button>
        </div>
      ))}

      <button
        type='button'
        onClick={() => append({ firstName: 'New', lastName: 'Friend' })}
      >
        Add Friend
      </button>

      <button
        type='button'
        onClick={() => prepend({ firstName: 'Old', lastName: 'Friend' })}
      >
        Prepend Friend
      </button>

      <button
        type='button'
        onClick={() => insert(1, { firstName: 'Inserted', lastName: 'Friend' })}
      >
        Insert Friend at Position 2
      </button>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default MyForm;
