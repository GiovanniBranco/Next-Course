import NextLink from "next/link";

interface ILinkProps {
  href: string;
  label: string;
}

const Link = ({ href, label }: ILinkProps) => {
  return <NextLink href={href}>{label}</NextLink>;
};

export default Link;
