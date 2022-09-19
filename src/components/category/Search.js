import { FiSearch } from 'react-icons/fi';
import s3 from "../../data/s3.png";

import { Menu } from '@headlessui/react'
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';


function Search() {



    return (
        <div className="container mx-auto relative grid grid-cols-6">
            <div className="absolute w-full top-[-4rem] border shadow-md col-start-2 col-end-6 h-28 bg-base-white rounded-lg flex items-center justify-around">
                <div className="h-11 relative border rounded-md flex w-full m-8 items-center gap-3 hover:border-black">
                    <FiSearch className='absolute ml-2' />
                    <input type="text" placeholder="Usta/İşletme Ara" className='h-full pl-8 p-4 rounded-md w-full' />
                </div>  
                <Menu as="nav" className={"relative"}>
                    <Menu.Button className="flex justify-between items-center w-60 border hover:border-black focus:border-black focus:border-2 bg-white text p-2 rounded-md">
                        <BsFillPersonFill size={20} className={' mr-3'} />
                        <div className="opacity-50"> Kategori</div>
                        <IoIosArrowDown/>
                    </Menu.Button>
                    <Menu.Items className={'absolute right-0 shadow-md w-full flex flex-col rounded-md text-sm font-normal p-1 bg-white'}>
                        <Menu.Item >
                            <input type="text" placeholder='Kategoriler içinde ara' className='p-2 mx-2 mt-2 rounded-md hover:border border' />
                        </Menu.Item>
                        <div className='px-4 my-1 py-1 border-b pb-3'>
                            //Ana Kategori Adı
                        </div>
                        <Menu.Item >
                            {({ active }) => (
                                <a className={`${active && ' opacity-70'} px-4 my-3 py-1 rounded-md flex items-center gap-3`} href='/'>
                                   <img src={s3} className='rounded-full border object-cover w-12 h-12' />  
                                   <p>Giriş Yap</p>
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                <div>
                    <button className='h-10 mx-8 w-40 font-semibold rounded-md  bg-green-600 text-white hover:bg-green-700 hover:border'>
                    <div className='flex items-center justify-center gap-3'>
                        <FiSearch/>
                        <p className='mr-4'>Ara</p>
                    </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search