export interface IHeaderProps {
  title?: string;
}

export const Header = ({ title = "Header" }: IHeaderProps) => {
  return (
    <header className="p-4 bg-gray-50">
      <link rel="prefetch" href="/" />
      <link rel="prefetch" href="/generic" />
      <link rel="prefetch" href="/angular" />
      <div className="font-bold">{title}</div>
      <div className="text-xs mt-1">
        Self hosted client side header with react props support and styles
        isolation
      </div>
      <div className="flex gap-4 mt-2">
        <a className="text-blue-600 underline" href="/">
          Home
        </a>
        <a className="text-blue-600 underline" href="/generic">
          Home - Generic
        </a>
        <a className="text-blue-600 underline" href="/angular">
          Angular
        </a>
      </div>
    </header>
  );
};
