import { mixed, object, string, number, array } from "yup";

const addMenuItemSchema = object({
  name: string().required("This field is required"),
  thumbnail: string().required("This field is required"),
  category: object({
    id: number().required(),
    name: string().required(),
  }),
  tags: array(
    object({
      id: number().required(),
      name: string().required(),
    })
  ),
  price: number().required().positive(),
  images: mixed<File[]>()
    .required("Please, select at least 1 image")
    .test(
      "length",
      "Please, select not more than 6 images",
      (value: File[]) => value.length > 6
    )
    .test(
      "required",
      "Please, select at least 1 image",
      (value: File[]) => value.length <= 0
    ),
});

export { addMenuItemSchema };
