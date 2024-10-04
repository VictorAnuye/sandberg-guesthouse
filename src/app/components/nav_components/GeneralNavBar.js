import Link from "next/link";
import {Montserrat} from "next/font/google";

const montserrat_thin_100 = Montserrat({
    subsets:["latin"],
    weight: "100"
});



export function GeneralNavBar ({cssClass}){
    return (
        <ul className={cssClass}>
            <li>
                <Link
                className={`${montserrat_thin_100.className} text-white text-2xl font-black  hover:text-orange-400 hover:scale-110 hover:shadow-lg transition duration-800`}
                href="/">Home</Link>
            </li>
            <li>
                <Link
                className={`${montserrat_thin_100.className} text-white text-2xl font-black  hover:text-orange-400 hover:scale-110 hover:shadow-lg transition duration-800`}
                href="#">About us</Link>
            </li>
            <li>
                <Link
                className={`${montserrat_thin_100.className} text-white text-2xl font-black  hover:text-orange-400 hover:scale-110 hover:shadow-lg transition duration-800`}
                href="#">Contact us</Link>
            </li>
            <li>
                <Link
                className={`${montserrat_thin_100.className} text-white text-2xl font-black  hover:text-orange-400 hover:scale-110 hover:shadow-lg transition duration-800`}
                href="/dashboard">Account</Link>
            </li>
        </ul>
    )
}