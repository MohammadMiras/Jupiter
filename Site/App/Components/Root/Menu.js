import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WebIcon from '@mui/icons-material/Web';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';

const Menu = () => {
    return <>
        <ul className="flex gap-6 items-center ">
            <li className="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize">
                <Link href={"/"} className="flex items-center gap-1 p-1 font-normal">
                    <HomeIcon className='text-slate-500' />
                    Home
                </Link>
            </li>
            <li className="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize">
                <Link href={"/"} className="flex items-center gap-1 p-1 font-normal">
                    <AccountCircleIcon className='text-slate-500' />
                    Profile
                </Link>
            </li>
            <li className="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize">
                <Link href={"/"} className="flex items-center gap-1 p-1 font-normal">
                    <WebIcon className='text-slate-500' />
                    Web
                </Link>
            </li>
            <li className="block antialiased font-sans text-sm font-light leading-normal text-inherit capitalize">
                <Link href={"/"} className="flex items-center gap-1 p-1 font-normal">
                    <LoginIcon className='text-slate-500' />
                    Login
                </Link>
            </li>
        </ul>
    </>
}
export default Menu