import { ThemeName } from 'tamagui';
export declare const initialTint = 3;
export declare const onTintChange: (listener: (cur: number) => void) => () => void;
export declare const setTintIndex: (next: number) => void;
export declare const useTint: () => {
    readonly tints: ThemeName[];
    readonly tintIndex: number;
    readonly tint: ThemeName;
    readonly setTintIndex: (next: number) => void;
    readonly setNextTintFamily: () => void;
    readonly setNextTint: () => void;
    readonly name: "tamagui";
    readonly families: {
        tamagui: ThemeName[];
    };
};
export declare const ThemeTint: (props: {
    children: any;
    disable?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ThemeTintAlt: ({ children, disable, offset, }: {
    children: any;
    disable?: boolean | undefined;
    offset?: number | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=useTint.d.ts.map