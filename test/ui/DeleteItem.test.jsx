// import React from "react";
// import fetchMock from "jest-fetch-mock";
// import "@testing-library/jest-dom";
// import { render, cleanup, waitFor, screen } from "../utils";
// import GearTable from "../../src/components/GearTable";
// import Item from "../../src/components/GearTable/Item";

// describe("<GearTable />", () => {
//   beforeEach(() => {
//     fetchMock.doMock();
//     fetch.resetMocks();
//   });
//   afterEach(() => {
//     cleanup();
//   });
//   it("removed the item when the delete button is clicked", () => {
//     render(<GearTable />);
//     expect(true).toEqual(true);
//   });

//   describe("<Item />", () => {
//     it("renders a button to delete the item", () => {
//       const item = { id: 1, name: "test name", brand: "test brand" };
//       render(
//         <table>
//           <tbody>
//             <Item item={item} />
//           </tbody>
//         </table>
//       );
//       expect(screen.getByRole("button")).toBeInTheDocument("");
//     });
//   });
// });
