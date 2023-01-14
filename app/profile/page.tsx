import Image from "next/image";

import data from "../../data.json";

type Profile = {
  name: string;
  avatar: string;
  links: Link[];
  social: Social[];
};

type Link = {
  title: string;
  url: string;
  image?: string;
};

type Social = {
  title: string;
  url: string;
  icon: string;
};

const Profile = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 min-h-screen">
      <div className="container">
        <div className="flex justify-center pt-16 flex-col items-center">
          <div className="flex flex-col items-center mb-12">
            <Image
              alt={data.name}
              className="rounded-full mb-4"
              height="96"
              src={data.avatar}
              unoptimized={true}
              width="96"
            />
            <h1 className="font-bold text-xl">{data.name}</h1>
          </div>
          <ul className="flex-grow w-full mb-6">
            {data.links.map((link: Link, idx) => (
              <li key={idx} className={idx > 0 ? "mt-2" : ""}>
                <LinkCard image={link.image} title={link.title} url={link.url} />
              </li>
            ))}
          </ul>

          <ul className="flex-grow w-full flex justify-center gap-x-3">
            {data.social.map((social: Social, idx) => (
              <li key={idx}>
                <SocialIcon icon={social.icon} title={social.title} url={social.url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const LinkCard = ({ title, url, image }: Link) => (
  <a
    className="bg-white bg-opacity-80 relative shadow-sm rounded-md p-2 flex items-center hover:scale-105 transition-transform min-h-[64px]"
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    {image && (
      <Image
        alt={title}
        className="absolute top-1/2 rounded-sm -translate-y-1/2 left-2"
        height={48}
        src={image}
        unoptimized={true}
        width={48}
      />
    )}
    <div className="flex-grow flex justify-center px-16">
      <h3 className="font-semibold">{title}</h3>
    </div>
  </a>
);

const SocialIcon = ({ title, url, icon }: Social) => (
  <a
    dangerouslySetInnerHTML={{ __html: icon }}
    className="block w-6 h-6"
    href={url}
    title={title}
  />
);

export default Profile;
