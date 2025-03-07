import MediIcon from "@/components/ui/Typography/MediIcon";
import Link from "next/link";

const FooterMenu = ({ title, navItems = [] }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">{title}</h3>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link className="flex gap-1" href={item.link}>
              <MediIcon name="angle-small-right" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
