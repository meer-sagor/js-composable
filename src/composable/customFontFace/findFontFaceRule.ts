export const findFontFaceRule =(fontFamily: string): CSSFontFaceRule | null => {
    const styleElements = document.querySelectorAll('style');

    for (const styleElement of styleElements) {
        const styleSheet = styleElement.sheet as CSSStyleSheet;
        if (styleSheet) {
            const rules = styleSheet.cssRules || styleSheet.rules;

            for (let i = 0; i < rules?.length; i++) {
                const rule = rules[i];
                if (
                    rule instanceof CSSFontFaceRule &&
                    rule.style.fontFamily === `'${fontFamily}'`
                ) {
                    return rule;
                }
            }
        }
    }
    return null;
}