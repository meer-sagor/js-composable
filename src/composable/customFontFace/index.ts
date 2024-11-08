import type {FontFaceRule} from "./@types";
import {findFontFaceRule} from "./findFontFaceRule.ts";
import {createFontFaceRule} from "./createFontFaceRule.ts";
import {updateFontFaceSrc} from "./updateFontFaceSrc.ts";

// async function ensureFontLoaded(fontFamily: string) {
//     try {
//         // Wait for the browser to load the font
//         await document.fonts.load(`1em ${fontFamily}`);
//     } catch (error) {
//         console.error(`Failed to load font ${fontFamily}:`, error);
//     }
// }

export const loadCustomFontFace = ({
                                         fontDisplay = 'swap',
                                         fontFamily,
                                         fontStyle = 'normal',
                                         fontWeight = 'normal',
                                         format = 'woff',
                                         srcUrl,
                                     }: FontFaceRule) => {
    const existingRule = findFontFaceRule(fontFamily);

    if (!existingRule) {
        createFontFaceRule({
            fontFamily,
            srcUrl,
            format,
            fontWeight,
            fontStyle,
            fontDisplay,
        });
    } else {
        updateFontFaceSrc(fontFamily, srcUrl);
    }
    // Ensure the font is available
    // await ensureFontLoaded(fontFamily);
};