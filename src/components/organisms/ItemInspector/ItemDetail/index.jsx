import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import EditField from "../../../molecules/EditField";
import { updateItem } from "../../../../api/itemsAPI";
import { useItemsState } from "../../../../state/contexts/ItemsStateProvider";
import { existingItemSchema } from "../../../../api/validation/itemsSchema";
import Typography from "../../../atoms/Typography";
import IconButton from "../../../atoms/IconButton";
import Container from "../../../atoms/Container";

function ItemDetail(props) {
  const { itemId } = props;
  const { items, itemsActions } = useItemsState();
  const item = items.find((i) => i.id === itemId);
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  const [saveErrorMessage, setSaveErrorMessage] = useState("");

  const handleSave = (setEditField) => async (field, value) => {
    const modifiedItem = { ...item, [field]: value };
    try {
      existingItemSchema.validate(modifiedItem);
      const updatedItem = await updateItem(modifiedItem);
      itemsActions.updateItem(updatedItem);
      setEditField(false);
      setSaveErrorMessage("");
    } catch (err) {
      setSaveErrorMessage(err.message);
    }
  };

  const handleCancel = (setEditField) => () => {
    setEditField(false);
  };

  return (
    <>
      {editName ? (
        <EditField
          field="name"
          item={item}
          handleSave={handleSave(setEditName)}
          handleCancel={handleCancel(setEditName)}
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
          field="brand"
          item={item}
          handleSave={handleSave(setEditBrand)}
          handleCancel={handleCancel(setEditBrand)}
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
      {saveErrorMessage && <p>{saveErrorMessage}</p>}
    </>
  );
}

ItemDetail.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default ItemDetail;
