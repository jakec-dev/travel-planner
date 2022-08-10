import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { addItem } from "../../../api/itemsAPI";
import { newItemSchema } from "../../../api/validation/itemsSchema";
import { useItemsState } from "../../../state/contexts/ItemsStateProvider";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import "./style.css";

function AddItem() {
  const { itemsActions } = useItemsState();
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
    setError,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(newItemSchema),
  });

  const onSubmitHandler = async (data) => {
    const { name, brand } = data;
    const newItem = { name, brand: brand || undefined };
    try {
      const createdItem = await addItem(newItem);
      itemsActions.addItem(createdItem);
      reset();
    } catch (err) {
      setError("submit", { message: err.message });
    }
  };

  return (
    <Card>
      <Typography variant="h2">Add Item</Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          errors={errors}
          id="itemName"
          label="Item Name"
          name="name"
          placeholder="Add item name"
          register={register}
        />
        <TextField
          errors={errors}
          id="itemBrand"
          label="Brand"
          name="brand"
          placeholder="Add item brand"
          register={register}
        />
        <Button
          className="addItem__btn"
          disabled={!isValid}
          label="Add Item"
          type="submit"
        />
        <ErrorMessage
          errors={errors}
          name="submit"
          render={({ message }) => <p>{message}</p>}
        />
      </form>
    </Card>
  );
}

export default AddItem;
