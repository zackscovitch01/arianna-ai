import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  label: string;
};
const UploadButton = ({ register, errors, label }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <Label
          htmlFor="upload-button"
          className="flex gap-2 p-3 rounded-lg bg-cream text-gray-600 cursor-pointer font-semibold text-sm items-center w-full sm:w-[200px]"
        >
          <Input
            {...register("image")}
            className="hidden"
            type="file"
            id="upload-button"
          />
          <Edit />
          {label}
        </Label>
        <p className="text-sm text-gray-400 ml-6 w-full">
          Recommended size is 300px * 300px, size less than 2MB
        </p>
      </div>
      <ErrorMessage
        errors={errors}
        name="image"
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </>
  );
};
export default UploadButton;
