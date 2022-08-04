import * as yup from "yup";

const newItemSchema = yup.object().shape({
  name: yup.string().trim().required(),
  brand: yup.string().trim(),
});

const existingItemSchema = newItemSchema.shape({
  id: yup.number().required().min(1),
});

const itemsSchema = yup.array().of(existingItemSchema);

export { newItemSchema, existingItemSchema, itemsSchema };
