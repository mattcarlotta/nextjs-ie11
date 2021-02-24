import Link from "next/link";
import NavPage from "../NavPage";

const Navbar = ({ children }) => (
  <>
    <div css="display: flex;justify-content: center;margin-top: 20px;">
      <Link style={{ marginRight: 5 }} href="/">
        <NavPage>Index</NavPage>
      </Link>
      <Link href="/page1">
        <NavPage>Page 1</NavPage>
      </Link>
      <Link href="/page2">
        <NavPage>Page 2</NavPage>
      </Link>
    </div>
    {children}
  </>
);

export default Navbar;
