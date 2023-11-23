export default function englishToKoreanFormat(originalOptions:any, template: Record<string, string | [string, JSX.Element]>): Array<string | [string, JSX.Element]> {
  return Object.keys(originalOptions)
    .filter((key) => originalOptions[key])
    .map((key) => template[key]);
};