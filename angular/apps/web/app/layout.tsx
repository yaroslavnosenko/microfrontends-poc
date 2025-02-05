import "../styles/globals.css";
import { RootAngularProvider } from "../lib/RootAngularProvider";
import { LocaleContextProvider } from "shared-contexts";
import { Header } from "./_components";

export default function Layout({ children }: { children: any }) {
  return (
    <html>
      <body style={{margin: 0}}>
        <Header host={'http://localhost:3010'} />
        <LocaleContextProvider locale="en-US">
          <RootAngularProvider>
            {children}
          </RootAngularProvider>
        </LocaleContextProvider>
      </body>
    </html>
  );
}
