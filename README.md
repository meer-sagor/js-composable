# js-composable
**JS-Composable** is a lightweight utility library designed to provide practical helper methods that simplify real-world use cases. Tailored for Node.js projects, it includes a versatile set of functions to streamline repetitive tasks and support common development needs.

## Key Features

- **Utility-Focused**: A collection of helper methods built to tackle everyday coding challenges.
- **Modular and Flexible**: Use only what you need without bloating your project.
- **Node.js Ready**: Compatible with any Node.js environment, enhancing productivity and efficiency in server-side applications.
- **Real-World Applications**: Inspired by actual project needs, providing practical solutions for real scenarios.

With **JS-Composable**, your Node.js projects get a boost in maintainability and clarity, allowing you to focus on core functionality while the library handles common yet essential utility tasks.


## Installation
To install the package, run the following command:
```bash
npm i @meersagor/js-composable
```
## Usage
#### Importing  the  Package
To  use  the  package,  import  the  required  methods:
```javascript
import  {  generateFormData,  logGenerateFormData  }  from  '@meersagor/js-composable';
```
### Example 1: Simple Object
```javascript
const  obj  =  {
	name:  'Meer Sagor',
	age:  24,
	skills: ['javaScript', 'typeScript',  'vuejs',  'nuxtjs',  'reactjs',  'nextjs']
};
const  result  =  generateFormData({ objectData: obj });
//  If  you  want  to  log  the  generated  FormData,  use  the  logGenerateFormData  method
logGenerateFormData(result);
```
### Example  2:  Object  with  File  and  Custom  File  Key
Here  is  an  example  of  how  to  use  the  package  with  an  object  that  includes  a  file  and  a  custom  file  key:

```javascript
const  obj2  =  {
	name:  'Meer Sagor',
	age:  24,
	skills: ['javaScript', 'typeScript',  'vuejs',  'nuxtjs',  'reactjs',  'nextjs'],
	file:  new  File(["content"], "filename.txt") //  Example  file  object
};
const  result  =  generateFormData({ objectData: obj2, fileKey: 'attachment' });
//  Log  the  generated  FormData
logGenerateFormData(result);
```
A TypeScript utility for dynamically adding, updating, and ensuring the loading of custom fonts in a web application. This utility helps you define font-face rules for custom fonts, allowing you to update their sources and ensure the fonts are fully loaded in the browser.

#### To use this `loadCustomFontFace` utility, simply call the `loadCustomFontFace` function with the necessary parameters.

```typescript
import  {loadCustomFontFace}  from '@meersagor/js-composable';

await loadCustomFontFace({
  fontFamily: 'CustomFont',
  srcUrl: 'https://example.com/fonts/CustomFont.woff',
  fontStyle: 'normal',
  fontWeight: '400',
  format: 'woff2',
  fontDisplay: 'swap',
});
```

## Methods

`generateFormData`
This  method  generates  FormData  from  the  provided  object.
#### Parameters
- `objectData`:  The  object  to  be  converted  into  FormData.
- `fileKey (optional)`: The key to use for the file if the object contains a file and want to set custom key.

#### Returns
- `FormData`:  The  generated  `FormData`  object.
- `logGenerateFormData` This  method  logs  the  generated  `FormData`  to  the  console.


`loadCustomFontFace`
#### Parameters

  | Parameters  | Type   | Description                                           | Default    |
  |-------------|--------|-------------------------------------------------------|------------|
  | fontFamily  | string | The name of the font family.                          | —          |
  | srcUrl      | string | The URL of the font file.                             | —          |
  | format      | string | The format of the font (e.g., `'woff'`, `'woff2'`).   | `'woff'`   |
  | fontWeight  | string | The weight of the font (e.g., `'normal'`, `'bold'`).  | `'normal'` |
  | fontStyle   | string | The style of the font (e.g., `'normal'`, `'italic'`). | `'normal'` |
  | fontDisplay | string | Defines how a font face is displayed.                 | `'swap'`   |

  

## License
This  package  is  open-source  and  available  under  the  [MIT  License.](https://github.com/meer-sagor/js-composable/blob/master/LICENSE)
## Contributing
Contributions  are  welcome!  Please  feel  free  to  submit  a  [pull  request.](https://github.com/meer-sagor/js-composable/pulls)

## Issues
If  you  encounter  any  issues,  please  create  a  [new  issue.](https://github.com/meer-sagor/js-composable/issues)