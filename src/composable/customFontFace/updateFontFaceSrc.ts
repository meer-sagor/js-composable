export const updateFontFaceSrc = (fontFamily: string, newSrcUrl: string): void => {
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach((styleElement) => {
        const styleSheet = styleElement.sheet as CSSStyleSheet;
        if (styleSheet) {
            const rules = styleSheet.cssRules || styleSheet.rules;

            for (let i = 0; i < rules?.length; i++) {
                const rule = rules[i];
                if (
                    rule instanceof CSSFontFaceRule &&
                    rule.style.fontFamily === `'${fontFamily}'`
                ) {
                    (rule.style as any).src = `url('${newSrcUrl}') format('${
                        (rule.style as any).format
                    }')`;
                    break;
                }
            }
        }
    });
}