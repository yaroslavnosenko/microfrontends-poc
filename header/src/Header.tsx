import { MdDashboard, MdHome, MdPerson } from "react-icons/md";
export interface IHeaderProps {
  title?: string;
}

export const Header = ({ title }: IHeaderProps) => {
  console.log(title);
  return (
    <header className="bg-white fixed h-full left-0">
      <link rel="prefetch" href="/" />
      <link rel="prefetch" href="/generic" />
      <link rel="prefetch" href="/angular" />
      <div className="flex gap-4 flex-col mt-4">
        <a
          className="text-brand w-[72px] h-12 flex items-center justify-center"
          href="/"
        >
          <MdHome size={24} />
        </a>
        <a
          className="text-brand w-[72px] h-12 flex items-center justify-center"
          href="/angular"
        >
          <MdDashboard size={24} />
        </a>
        <a
          className="text-brand w-[72px] h-12 flex items-center justify-center"
          href="/generic"
        >
          <MdPerson size={24} />
        </a>
      </div>
      <div className="absolute w-[1px] h-full bg-gray-100 right-0 top-0" />
    </header>
  );
};
