const FIELDS = [
  { name: "name" },
  { name: "brand" },
  { name: "weight", inputProps: { type: "number" } },
  { name: "url" },
  { name: "price", inputProps: { type: "number", step: 0.01, min: 0 } },
  { name: "notes" },
];

export default FIELDS;
