import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    animation?: string;
    "fs-copyclip"?: any;
    [key: string]: any;
  }
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    [key: string]: any;
  }
  interface CSSProperties {
    [key: string]: any;
  }
}
