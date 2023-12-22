
import UseAuth from "../hooks/UseAuth";
import CustomNavLink from "../components/CustomNavLink";

const Navbar = () => {
  const {user, logOut} = UseAuth()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.ibb.co/zJY5bST/icons8-tick-40.png" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Getting Things Done</span>
    </span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <CustomNavLink to={'/'}  href="#" className="block py-2 px-3 text-white bg-customOrange rounded md:bg-transparent md:text-customOrange md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</CustomNavLink>
        </li>
        <li>
          <CustomNavLink href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</CustomNavLink>
        </li>
        <li>

        </li>
        {user ? (
        <div className="dropdown text-black dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <span data-tooltip-id="User" data-tooltip-content="User Profile!">
          <img alt={user?.displayName} src={user?.photoURL} />
</span>
        </div>
      </div>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <span className="justify-between mb-1">
            {user?.displayName}
          </span>
        </li>
        <li className="mt-1 mb-1"><CustomNavLink to="/dashboard">DashBoard</CustomNavLink></li>
        <li><CustomNavLink onClick={handleLogOut}>LogOut</CustomNavLink></li>
      </ul>
    </div>
      ) : (
        <CustomNavLink to="login">Join Us</CustomNavLink>
      )}
        <li>
          <CustomNavLink href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</CustomNavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;