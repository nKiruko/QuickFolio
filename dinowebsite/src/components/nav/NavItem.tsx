import Link from "next/link";

type MyProps = {
    name: string;
    href: string;
    mobile?: boolean;
}

const NavItem = (props: MyProps) => {
    return (
        <Link href={props.href} passHref >
            <a className={`${props.mobile ? "block py-2 text-sm hover:bg-gray-200 text-center" : "py-5 px-3"}`}>{props.name}</a>
        </Link>
    );
}

export default NavItem;