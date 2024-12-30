import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface IHeader {
    children: React.ReactNode;
}
const Header = ({ children }: IHeader) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-blueTheme text-white px-5 py-3 pt-12 mt-6 lg:pt-3 lg:mt-0 lg:relative`}
            >
                <h1 className="text-2xl font-bold mb-4 text-blueThemeLight"><Link to="/dashboard" className='text-blueThemeLight'>ERP Dashboard</Link></h1>
                <nav>
                    <ul>
                        <li className="mb-1 hover:bg-blueThemeLight p-2 rounded"><Link className="text-white hover:text-white" to="/marksheet">Mark Sheet</Link></li>
                        <li className="mb-1 hover:bg-blueThemeLight p-2 rounded"><a className="text-white hover:text-white" href="#">Fees</a></li>
                        <li className="mb-1 hover:bg-blueThemeLight p-2 rounded"><a className="text-white hover:text-white" href="#">Profile</a></li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Content Area */}

                <div className="flex justify-between items-center bg-blueTheme text-white p-2">
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-blue-800 text-xl relative z-10">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <div />
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blueThemeLight text-white rounded-full flex items-center justify-center font-semibold">
                            {"DK"}
                        </div>
                    </div>
                </div>
                <main className="flex-1 p-6 pt-1 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Header;
