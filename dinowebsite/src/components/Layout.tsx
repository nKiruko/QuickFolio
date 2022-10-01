import NavBar from "../components/nav/NavBar";

export default function Layout({ children } : any) {
  return (
    <>
      <NavBar />
         <main>{children}</main>
    </>
  )
}