import { State } from "@/store/store";
import { useSelector } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavBar = () => {
  const cartCount = useSelector((state: State) => state.shop.cart.length);
  return (
    <nav className="flex-1">
      <ul className="flex justify-end items-center gap-8">
        <NavLink to="/" label="Home" />
        <NavLink to="/shop" label="Shop" />
        <NavLink to="/cart" label="Cart" disabled={cartCount === 0} />
      </ul>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  disabled?: boolean;
}

const NavLink = ({ to, label, disabled }: NavLinkProps) => {
  return (
    <li className="w-24">
      <RouterNavLink
        to={to}
        className={({ isActive }) => `relative text-2xl
            hover:opacity-75 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-1  after:transition-width after:duration-200 after:ease-in-out hover:after:w-full hover:after:left-0
            ${
              isActive
                ? "text-secondary-400 font-bold after:bg-secondary-400 after:w-full after:left-0"
                : "text-neutral-400 md:text-primary-400 after:bg-neutral-400 md:after:bg-primary-400"
            }
            ${disabled ? "opacity-25 pointer-events-none" : ""}
            `}
      >
        {label}
      </RouterNavLink>
    </li>
  );
};
