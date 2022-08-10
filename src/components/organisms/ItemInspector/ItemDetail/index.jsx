import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import EditField from "../../../molecules/EditField";
import { updateItem } from "../../../../api/itemsAPI";
import { useItemsState } from "../../../../state/contexts/ItemsStateProvider";
import { existingItemSchema } from "../../../../api/validation/itemsSchema";
import Typography from "../../../atoms/Typography";
import IconButton from "../../../atoms/IconButton";
import Container from "../../../atoms/Container";
import Button from "../../../atoms/Button";

function ItemDetail(props) {
  const { itemId } = props;
  const { items, itemsActions } = useItemsState();
  const item = items.find((i) => i.id === itemId);
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);

  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
  } = useForm({
    defaultValues: { id: itemId, name: item.name, brand: item.brand },
    resolver: yupResolver(existingItemSchema),
  });

  const onSubmitHandler = async (data) => {
    const modifiedItem = { ...item, ...data };
    try {
      const updatedItem = await updateItem(modifiedItem);
      itemsActions.updateItem(updatedItem);
      setEditName(false);
      setEditBrand(false);
      reset();
    } catch (err) {
      setError("submit", { message: err.message });
    }
  };

  const handleCancel = (field) => () => {
    switch (field) {
      case "name":
        setEditName(false);
        break;
      case "brand":
        setEditBrand(false);
        break;
      default:
        setEditName(false);
        setEditBrand(false);
        break;
    }
    resetField(field);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input type="hidden" value={itemId} {...register("id")} />
      {editName ? (
        <EditField
          errors={errors}
          field="name"
          item={item}
          handleCancel={handleCancel("name")}
          register={register}
        />
      ) : (
        <Container flex="spread">
          <Typography data-testid="itemDetailName" variant="h2">
            {item.name}
          </Typography>
          <IconButton
            Icon={FaEdit}
            label="Edit Name"
            onClick={() => setEditName(true)}
          />
        </Container>
      )}
      {editBrand ? (
        <EditField
          errors={errors}
          field="brand"
          item={item}
          handleCancel={handleCancel("brand")}
          register={register}
        />
      ) : (
        <Container flex="spread">
          <Typography data-testid="itemDetailBrand">
            Brand: {item.brand}
          </Typography>
          <IconButton
            Icon={FaEdit}
            label="Edit Brand"
            onClick={() => setEditBrand(true)}
          />
        </Container>
      )}
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
