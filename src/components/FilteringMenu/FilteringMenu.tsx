import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

export const FilteringMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>All</MenuItem>
        <MenuItem>Active</MenuItem>
        <MenuItem>Completed</MenuItem>
      </MenuList>
    </Menu>
  );
}
