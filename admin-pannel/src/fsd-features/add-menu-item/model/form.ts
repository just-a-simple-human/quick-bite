import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addMenuItemSchema } from "../types/schema";

function useAddMenuItemForm() {
  return useForm({
    defaultValues: {
      images: [],
      name: "",
      thumbnail: "",
      price: 1,
    },
    mode: "all",
    resolver: yupResolver(addMenuItemSchema),
  });
}

function appendImage(value: File[], input: FileList | null, limit?: number) {
  const result = [...value];
  if (!input) {
    return result;
  }
  for (let file of input) {
    if (result.find((v) => v.name === file.name)) {
      continue;
    }
    result.unshift(file);
  }
  return result.slice(0, limit);
}

export { useAddMenuItemForm, appendImage };
