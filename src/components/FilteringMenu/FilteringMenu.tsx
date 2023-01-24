import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'

type FilteringMenuType = 'all' | 'active' | 'completed';
const filteringMenuList: FilteringMenuType[] = ['all', 'active', 'completed'];

const toUpperCaseCharOne = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const FilteringMenu = () => {
  const [currentMenu, setCurrentMenu] = useState<FilteringMenuType>('all');

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {toUpperCaseCharOne(currentMenu)}
      </MenuButton>
      <MenuList>
        {filteringMenuList.map((menu) => {
          const isCurrentMenu = currentMenu === menu;
          return (
            <MenuItem
              key={menu}
              onClick={() => setCurrentMenu(menu)}
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
