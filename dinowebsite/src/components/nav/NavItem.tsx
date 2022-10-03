import Link from "next/link";

type MyProps = {
    name: string,
    href: string,
    mobile?: boolean,
}

const NavItem = (props: MyProps) => {
    return (
        <Link href={props.href} passHref >
            <a className={`${props.mobile ? "block py-2 text-sm text-center" : "py-5 px-3 hover:underline hover:underline-offset-8 hover:decoration-tmorange"}`}>{props.name}</a>
        </Link>
    );
}

export default NavItem;