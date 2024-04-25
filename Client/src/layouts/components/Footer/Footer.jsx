import {
  AtSignIcon,
  EarthIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/NguyenFgw5295',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100044384567249',
    icon: <FacebookIcon />,
  },
  {
    name: 'Website',
    link: '/',
    icon: <EarthIcon />,
  },
];

const description =
  'MYQT offers a range of free and paid online and offline courses in VietNam. Improve your skills now!';

const Footer = () => {
  return (
    <footer className="bg-[#191F33] text-white py-4">
      <div className="container mx-auto px-4">
        {/* Description */}
        <p className="text-center text-lg font-medium max-w-lg mx-auto mb-6">{description}</p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map(({ name, icon, link }) => (
            <a
              key={name}
              href={link}
              title={name}
              className="text-white hover:text-[#767e94]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
              <span className="sr-only">{name}</span>
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="text-white text-center">
          <AtSignIcon size={16} className="inline-block mr-2" />
          <span className="text-lg font-medium">thaimanh2108@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
