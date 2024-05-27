import React from 'react';
import { PiCreditCardDuotone } from "react-icons/pi";
import { AuthContextType, useAuthContext } from '@/app/(main)/authContext';

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: 'Eat ease EPF',
  },
  {
    name: 'Menu',
    href: '/',
    icon: <PiCreditCardDuotone />,
    allowedDomains: ['epfedu.fr', 'epfadmin.fr'], // Domaines autorisés
  },
  {
    name: 'Menu2',
    href: '/',
    icon: <PiCreditCardDuotone />,
    allowedDomains: ['epfadmin.fr'], // Seulement les admins peuvent voir ce menu
  },
];

const Menu = () => {
  const { user } = useAuthContext() as AuthContextType;
  const email = user?.email || '';

  const getDomainFromEmail = (email: string): string => {
    return email.split('@')[1];
  };
  
  const userDomain = email ? getDomainFromEmail(email) : '';
  
  // Log to verify values
  console.log('User Email:', email);
  console.log('User Domain:', userDomain);

  return (
    <ul>
      {menuItems.map((item, index) => {
        // Si allowedDomains est défini et que le domaine de l'utilisateur n'est pas dans la liste, ne pas afficher cet élément
        if (item.allowedDomains && !item.allowedDomains.includes(userDomain)) {
          return null;
        }
        return (
          <li key={index}>
            {item.icon} {item.href ? <a href={item.href}>{item.name}</a> : item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
