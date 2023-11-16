import { LinkProps as NextLinkProps } from 'next/link';
import { TextProps } from 'tamagui';
import { ButtonProps } from 'tamagui';
export type LinkProps = Omit<NextLinkProps, 'passHref' | 'as'> & TextProps & {
    target?: any;
    rel?: any;
    title?: any;
};
export declare const Link: ({ href, replace, scroll, shallow, locale, children, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export declare const ParagraphLink: ({ href, replace, scroll, shallow, locale, children, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export type ButtonLinkProps = Pick<NextLinkProps, 'href' | 'replace' | 'scroll' | 'shallow' | 'locale'> & ButtonProps & {
    target?: any;
    rel?: any;
    title?: any;
};
export declare const ButtonLink: ({ href, replace, scroll, shallow, locale, children, ...props }: ButtonLinkProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Link.d.ts.map