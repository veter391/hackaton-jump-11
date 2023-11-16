import { ThemeName } from 'tamagui';
declare const families: {
    tamagui: ThemeName[];
};
type TintFamily = keyof typeof families;
export declare function getTints(): {
    name: "tamagui";
    tints: ThemeName[];
    families: {
        tamagui: ThemeName[];
    };
};
export declare function useTints(): {
    name: "tamagui";
    tints: ThemeName[];
    families: {
        tamagui: ThemeName[];
    };
};
export declare const setTintFamily: (next: TintFamily) => void;
export declare const setNextTintFamily: () => void;
type ChangeHandler = (next: TintFamily) => void;
export declare const onTintFamilyChange: (cb: ChangeHandler) => () => void;
export {};
//# sourceMappingURL=tints.d.ts.map