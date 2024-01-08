import { useEffect, useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDocumentClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement);
        if (!target.closest(".menu-btn")) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const navigationLinks = [
        { title: "Features", path: "#" },
        { title: "Integrations", path: "#" },
        { title: "Customers", path: "#" },
        { title: "Pricing", path: "#" }
    ];

    return (
        <nav className={`bg-white pb-5 md:text-sm ${isOpen ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="#">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt=""
                        />
                    </a>
                    <div className="md:hidden">
                        <button
                            className="menu-btn text-gray-500 hover:text-gray-800"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    {/* ... Your close icon */}
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    {/* ... Your open icon */}
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {navigationLinks.map((item, idx) => (
                            <li key={idx} className="text-gray-700 hover:text-gray-900">
                                <a href={item.path} className="block">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <a href="#" className="block text-gray-700 hover:text-gray-900">
                            Log in
                        </a>
                        <a href="#" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                            Sign in
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                {/* ... Your sign-in icon */}
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
