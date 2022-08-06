import React, { useState } from "react";
import { addItem } from "../../../api/itemsAPI";
import { newItemSchema } from "../../../api/validation/itemsSchema";
import { useItemsState } from "../../../contexts/itemsState";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import Typography from "../../atoms/Typography";

function AddItem() {
  const { itemsActions } = useItemsState();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, brand: brand || undefined };
    try {
      await newItemSchema.validate(newItem);
      const createdItem = await addItem(newItem);
      itemsActions.addItem(createdItem);
      setName("");
      setBrand("");
      setSubmitErrorMessage("");
    } catch (err) {
      setSubmitErrorMessage(err.message);
    }
  };

  const handleNameChange = async (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    const newItem = { name: nameValue, brand: brand || undefined };
    const isValid = await newItemSchema.isValid(newItem);
    setSubmitDisabled(!isValid);
  };

  const handleBrandChange = async (e) => {
    const brandValue = e.target.value;
    setBrand(brandValue);
    const newItem = { name, brand: brandValue };
    const isValid = await newItemSchema.isValid(newItem);
    setSubmitDisabled(!isValid);
  };

  return (
    <Card>
      <Typography variant="h2">Add Item</Typography>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="itemName">
          Item name
          <Input
            id="itemName"
            onChange={handleNameChange}
            placeholder="Add item name"
            type="text"
            value={name}
          />
        </Label>
        <Label htmlFor="itemBrand">
          Brand
          <Input
            id="itemBrand"
            onChange={handleBrandChange}
            placeholder="Add item brand"
            type="text"
            value={brand}
          />
        </Label>
        <Button type="submit" disabled={submitDisabled}>
          Add Item
        </Button>
        {submitErrorMessage && <p>{submitErrorMessage}</p>}
      </form>
    </Card>
  );
}

export default AddItem;
