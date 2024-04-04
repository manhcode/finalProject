import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center">
      <Link to={"tel:099999999"} className="py-4 px-2 hover:bg-neutral-200">Liên hệ</Link>
      <a className="py-4 px-2">Chính sách bảo mật</a>
    </div>
  );
}

export default Footer;
