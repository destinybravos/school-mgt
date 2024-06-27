import { FaAddressCard, FaHome, FaInfoCircle, FaSignInAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import the UseState Hook from REACT

const Header = () => {
    const [openNav, setNavState] = useState(false); // Set the initial navigation state to false

    return (
        <div className="bg-secondary min-h-10 px-4 py-3">
            <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between md:items-center">
                <aside className="font-bold py-2 text-lg flex justify-between items-center">
                    <div>
                        School<span className="text-primary">MGT</span>
                    </div>
                    {/* On click change the current state to the opposite using the (!) symbol */}
                    <button onClick={() => setNavState((curState) => !curState)} className="py-1 px-2 md:hidden">
                        <FaBars />
                    </button>
                </aside>

                <aside className={`${openNav ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row gap-1">
                        <li>
                            <Link to="/" className="py-1 px-4 rounded-md flex items-center gap-1">
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="py-1 px-4 rounded-md flex items-center gap-1">
                                <FaInfoCircle /> About Project
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="py-1 px-4 rounded-md flex items-center gap-1">
                                <FaAddressCard /> Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="py-1 px-4 rounded-md border border-primary flex items-center gap-1">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                    </ul>
                </aside>
            </section>
        </div>
    )
}

export default Header