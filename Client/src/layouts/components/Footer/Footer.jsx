import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center">
      <Link to={"tel:099999999"} className="py-4 text-blue-600 px-2 hover:bg-neutral-200">Contact</Link>
      <a className="py-4 text-blue-600 px-2">Privacy Policy</a>
    </div>
  );
}

export default Footer;
