import ReactDOM from "react-dom/client";
import { IHeaderProps, Header } from "./Header";

interface IWebComponentProps extends IHeaderProps {
  host: string;
}

const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class HeaderWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const { host, ...props } =
      this.getPropsFromAttributes<IWebComponentProps>();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(
      <>
        <link href={`${host}/header.css`} rel="stylesheet" type="text/css" />
        <Header {...props} />
      </>
    );
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute.name)] = attribute.value;
    }

    return props as T;
  }
}

export default HeaderWebComponent;
