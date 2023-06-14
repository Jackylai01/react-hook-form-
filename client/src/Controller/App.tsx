import Input from '@mui/material/Input';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Select from 'react-select';

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const App = () => {
  // 使用 useForm 鉤子初始化 form，設定默認值
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: { label: '', value: '' },
    },
  });

  // 定義提交的處理函數，將提交的數據打印到控制台
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    // 當表單提交時，調用 handleSubmit 方法，並將 onSubmit 函數作為參數傳入
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 使用 Controller 管理 firstName 字段，將 control 屬性與 useForm 返回的 control 物件連接起來 */}
      <Controller
        name='firstName'
        control={control}
        // Controller 會將 field 對象傳入 render 函數，可以將這個對象解構並傳入被控制的組件（在這裡是 Input 組件）
        render={({ field }) => <Input {...field} />}
      />
      {/* 使用 Controller 管理 iceCreamType 字段 */}
      <Controller
        name='iceCreamType'
        control={control}
        // Controller 會將 field 對象傳入 render 函數，可以將這個對象解構並傳入被控制的組件（在這裡是 Select 組件）
        render={({ field }) => (
          <Select
            {...field}
            // 為 Select 組件設定選項
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
        )}
      />
      {/* 添加提交按鈕 */}
      <input type='submit' />
    </form>
  );
};

export default App;
