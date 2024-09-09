import React from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { MdOutlineMailOutline } from "react-icons/md";

function RHFInput({ name, className ,children,...others}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            value={field.value}
            id={name}
            className="pl-8 rounded-lg outline-none border-2 border-paper transition-all focus-visible:border-primary "
            placeholder="Email"
            {...others}
          />
      )}
    ></Controller>
  );
}

export default RHFInput;
