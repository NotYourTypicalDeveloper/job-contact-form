// import { React } from "react";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuOptionGroup,
//   MenuItemOption,
// } from "@chakra-ui/react";

// const DropdownMenu = ({ ddOptions, onSelect, ddLabelTitle, ddName }) => {
//   // Populating the sorting options
//   const dropdownOptionsElems = ddOptions.map((option) => {
//     return (
//       <MenuItemOption
//         key={`option-${option}`}
//         value={option}
//         _checked={{ fontWeight: "bold" }}
//         _notLast={{ borderBottomWidth: "0.5px", borderBottomColor: "gray.100" }}
//         onClick={onSelect(option)}
//       >
//         {option}
//       </MenuItemOption>
//     );
//   });

//   return (
//     <>
//       <Menu gutter={0} closeOnSelect={true}>
//         <MenuButton>{ddLabelTitle}</MenuButton>

//         <MenuList
//           minWidth="240px"
//           p={0}
//           color="bcDeepPurple.700"
//           bg="gray.50"
//           borderRadius="0px 0px 6px 6px"
//           borderStyle="none"
//           boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
//           w="16rem"
//         >
//           <MenuOptionGroup defaultValue={ddOptions[0]} type="radio">
//             {dropdownOptionsElems}
//           </MenuOptionGroup>
//         </MenuList>
//       </Menu>
//     </>
//   );
// };

// export default DropdownMenu;
