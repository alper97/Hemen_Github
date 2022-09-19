import logo from "../../data/logo.svg";
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Menu } from '@headlessui/react';




function Header() {
  return (
    <div className=" border-b text-lg font-semibold text-brand-color shadow-md bg-base-white">
      <div className="flex justify-between items-center px-5 container mx-auto">
        <a href="/">
            <img src={logo} className="w-56 h-auto" alt="/"/>
        </a>
        <ul className="flex gap-x-6 mr-9">
          <li>
            <a href="/montaj&tamir" className="hover:opacity-70">
              Montaj Tamir
            </a>
          </li>
          <li>
            <a href="/tadilat&inşaat" className="hover:opacity-70">
              Tadilat İnşaat
            </a>
          </li>
          <li>
            <a href="/temizlik" className="hover:opacity-70">
              Temizlik
            </a>
          </li>
        </ul>
        <Menu as="nav" className={"relative"}>
          <Menu.Button className="flex items-center gap-2 border-2 text-sm p-2 rounded-md">
            <BsFillPersonFill size={25}/>
              <div className="text-base font-semibold text-brand-color">Giriş Yap</div>
            <IoIosArrowDown className="top-2"/>
          </Menu.Button>
          <Menu.Items className={'absolute right-0 mt-1  shadow-md w-[150px] flex flex-col rounded-lg text-sm font-normal p-1 bg-secondary-brand-color'}>
            <Menu.Item >
              {({ active }) => (
                <a className={`${active && ' opacity-70'} px-4 py-1 rounded-md`} href='/'>
                  Giriş Yap    
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && ' opacity-70'} px-4 py-1 rounded-md`} href={'/'}>
                   Kayıt ol
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
        
      </div>
    </div>
  )
}

export default Header