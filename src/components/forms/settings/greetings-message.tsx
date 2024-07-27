import Section from "@/components/section-label";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";

type Props = {
  message: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
const GreetingsMessage = ({ message, register, errors }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Section
        label="Greeting message"
        message="Customize your welcome message."
      />
      <div className="lg:w-[500px]">
        <FormGenerator
          register={register}
          name="welcomeMessage"
          lines={2}
          errors={errors}
          type="text"
          inputType="textarea"
          placeholder={message}
        />
      </div>
    </div>
  );
};
export default GreetingsMessage;
