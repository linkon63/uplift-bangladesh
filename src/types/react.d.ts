import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    animation?: string;
    "fs-copyclip"?: unknown;
    [key: string]: unknown;
  }
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    [key: string]: unknown;
  }
  interface CSSProperties {
    [key: string]: unknown;
  }
}
