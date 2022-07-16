import { Title3 } from "@/components/core";

type TLink = {
  label: string | React.ReactNode;
  link: string;
};

interface Props {
  title: string;
  links: TLink[];
  className?: string;
}

export const FooterLinkSection = ({ title, links, className = "" }: Props) => {
  return (
    <div className={`${className} flex justify-center `}>
      <ul className={`flex flex-col justify-between w-52 ${className}`}>
        <Title3> {title} </Title3>
        {links?.map((link, index) => (
          <li key={index} className="mt-1">
            <a href={link.link} className="text-neutral-200 hover:text-neutral-400">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
