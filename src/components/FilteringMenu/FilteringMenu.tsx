import { useContext } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

import { TodoFilterType } from "../../type/Todo";
import { TodoContext } from "../../providers/TodoProvider";

const filteringMenuList: TodoFilterType[] = ['all', 'active', 'completed'];

const toUpperCaseCharOne = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const FilteringMenu = () => {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {toUpperCaseCharOne(filter)}
      </MenuButton>
      <MenuList>
        {filteringMenuList.map((menu) => {
          const isCurrentMenu = filter === menu;
          return (
            <MenuItem
              key={menu}
              onClick={() => setFilter(menu)}
              isDisabled={isCurrentMenu}
            >
              {toUpperCaseCharOne(menu)}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
