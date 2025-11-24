import menu_data from '@/data/menu_data';
import Link from 'next/link';
import React from 'react';

const NavMenu = () => {
  return (
    <ul>
      {menu_data.map((item) => (
        <li key={item.id} className={item.sub_menus ? 'has-dropdown' : ''}>
          <Link href={item.link}>{item.title}</Link>
          {item.sub_menus && (
            <ul className="submenu">
              {item.sub_menus.map((sub) => (
                <li key={sub.title}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
