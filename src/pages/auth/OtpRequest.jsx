import { useState } from "react";
import PrimaryTextinput from "../../components/utils/PrimaryTextinput";
import { FaEnvelope, FaPhone, FaPhoneFlip } from "react-icons/fa6";
import Button from "../../components/utils/Button";
import SelectInput from "../../components/utils/SelectInput";


const OtpRequest = () => {
    const [activeTab, setActiveTab] = useState('email')

    return (
        <div>

            <section>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    Login into your account
                </h1>
                <p className="mb-4">
                    Welcome back. Please enter your details.
                </p>

                <h3 className="flex items-center">
                    <span role="button" onClick={() => setActiveTab('email')} className={`block flex-grow py-2 px-4 border-b-2 ${activeTab == 'email' ? 'border-primary' : 'border-slate-300' }`}>Email</span>
                    <span role="button" onClick={() => setActiveTab('phone')} className={`block flex-grow py-2 px-4 border-b-2 ${activeTab == 'phone' ? 'border-primary' : 'border-slate-300' }`}>Phone Number</span>
                </h3>

                
                { activeTab == 'email' ? <>
                    {/* Email Div. It should display when active state is 'email' */}
                    <div className="p-4">
                        <form>
                            <div className="mb-4">
                                <PrimaryTextinput 
                                    icon={<FaEnvelope className="text-xl" />} 
                                    placeholder="Email Address" 
                                    type="email" 
                                />
                            </div>


                            <div>
                                <Button className="w-full justify-center rounded-md h-9 text-white">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </> : <>
                    {/* Phone Div. It should display when active state is 'phone' */}
                    <div className="p-4">
                        <form>
                            <div className="mb-4">
                                <PrimaryTextinput
                                    extraElement={<SelectInput options={['+234', '+233', '+1']} />} 
                                    icon={<FaPhoneFlip className="text-xl" />} 
                                    placeholder="Phone Number" 
                                    type="tel" />
                            </div>
                            <div>
                                <Button className="w-full justify-center rounded-md h-9 text-white">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </> }
                
            </section>

            
        </div>
    )
}

export default OtpRequest