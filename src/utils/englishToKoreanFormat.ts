export default function transformOptions(originalOptions:any, template:any): any {
  return Object.keys(originalOptions)
    .filter((key) => originalOptions[key])
    .map((key) => template[key]);
};