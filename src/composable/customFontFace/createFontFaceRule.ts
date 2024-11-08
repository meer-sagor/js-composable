import {FontFaceRule} from "./@types";

export const createFontFaceRule = ({
                                       fontDisplay = 'swap',
                                       fontFamily,
                                       fontStyle = 'normal',
                                       fontWeight = 'normal',
                                       format = 'woff',
                                       srcUrl,
                                   }: FontFaceRule): void => {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    const fontFaceRule = `
    @font-face {
      font-family: '${fontFamily}';
      src: url('${srcUrl}') format('${format}');
      font-weight: ${fontWeight};
      font-style: ${fontStyle};
      font-display: ${fontDisplay};
    }
  `;
    if (styleElement.sheet) {
        styleElement.sheet.insertRule(fontFaceRule);
    }
}