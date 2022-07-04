import { createItem } from "./itemsAPI";

describe("createItem()", () => {
  it("should return the new item", async () => {
    const item = { id: 4, name: "test name" };
    const resp = await createItem(item);
    expect(resp).toMatchObject(item);
  });
});
