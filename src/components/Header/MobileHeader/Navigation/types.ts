export type NavLink = {
  text: string;
  link: string;
};

export type Props = {
  navLinks: NavLink[];
  closeMenu: () => void;
};
