import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { updateItem } from "../../../../api/itemsAPI";
import { useItemsState } from "../../../../state/contexts/ItemsStateProvider";
import { existingItemSchema } from "../../../../api/validation/itemsSchema";
import Button from "../../../atoms/Button";
import ItemField from "./ItemField";
import FIELDS from "../../../_settings/_itemFields";

function ItemDetail(props) {
  const { itemId } = props;
  const { items, itemsActions } = useItemsState();
  const item = items.find((i) => i.id === itemId);
  const [editFields, setEditFields] = useState([]);

  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
  } = useForm({
    defaultValues: {
      id: itemId,
      name: item.name,
      brand: item.brand || undefined,
      weight: item.weight || undefined,
      url: item.url || undefined,
      price: item.price || undefined,
      notes: item.notes || undefined,
    },
    resolver: yupResolver(existingItemSchema),
  });

  const onSubmitHandler = async (data) => {
    const modifiedItem = { ...item, ...data };
    try {
      const updatedItem = await updateItem(modifiedItem);
      itemsActions.updateItem(updatedItem);
      setEditFields([]);
      reset();
    } catch (err) {
      setError("submit", { message: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="hidden" value={itemId} {...register("id")} />
      {FIELDS.map((field) => (
        <ItemField
          dataTestId={`itemDetail${field.name}`}
          editFields={editFields}
          errors={errors}
          field={field.name}
          key={field.name}
          inputProps={field.inputProps}
          item={item}
          register={register}
          resetField={resetField}
          setEditFields={setEditFields}
        />
      ))}
      {isDirty ? <Button type="submit" label="Save Changes" /> : null}
      <ErrorMessage
        errors={errors}
        name="submit"
        render={({ message }) => <p>{message}</p>}
      />
    </form>
  );
}

ItemDetail.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default ItemDetail;
