import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

type FormInputs = {
  singleErrorInput: string;
};

type TextFieldProps = {
  name: string;
  label: string;
  register?: any;
  required?: boolean;
  messageError?: string;
};

function TextField({
  name,
  label,
  register,
  required,
  messageError,
}: TextFieldProps) {
  const {
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <>
      <label>{label}</label>
      <input {...register(name, { required })} />
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
    </>
  );
}

export default TextField;
