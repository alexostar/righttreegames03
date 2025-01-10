import ModeToggle from '../mode-toggle';
import SideBarNav from '../sidebar-nav';
import UserButton from './user-button';

const Menu = () => {
  return (
    <>
      <div className='flex justify-end gap-3'>
        <nav className='flex w-full max-w-xs gap-1'>
          <ModeToggle />
          <SideBarNav />
          <UserButton />
        </nav>
      </div>
    </>
  );
};

export default Menu;
