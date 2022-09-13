import * as yup from "yup";

const newItemSchema = yup.object().shape({
  name: yup.string().trim().required(),
  brand: yup.string().trim(),
  weight: yup
    .number()
    .transform((_, val) => (val !== "" ? Number(val) : null))
    .nullable()
    .notRequired(),
  url: yup.string().trim(),
  price: yup
    .number()
    .transform((_, val) => (val !== "" ? Number(val) : null))
    .test(
      "is-currency",
      "Price must be a positive number with a maximum of 2 decimal places",
      (value) =>
        String(value).match(/^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/) || !value
    )
    .nullable()
    .notRequired(),
  notes: yup.string().trim(),
});

const existingItemSchema = newItemSchema.shape({
  id: yup.number().positive().required(),
});

const itemsSchema = yup.array().of(existingItemSchema);

export { newItemSchema, existingItemSchema, itemsSchema };
