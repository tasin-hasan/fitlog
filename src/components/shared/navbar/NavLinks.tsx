"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();

    const navLinks = [
        {name: "Workouts", href: "/"},
        {name: "My plan", href: "/my-plan"}
    ];

    

    return (
        <div className='flex items-center gap-6'>
            {navLinks.map((link)=> {
                const isActive = pathname === link.href;
                return (
                    <Link key={link.href} href={link.href}
                    className={isActive? "text-[#c2f700] bg-green-600/10 px-3 py-1 rounded-lg":"text-gray-300"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            
        </div>
    );
};

export default NavLinks;