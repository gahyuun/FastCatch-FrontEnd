export const useValidation = (value: string, regex: RegExp) => {
  const isValidation = regex.test(value);
  return { isValidation };
};
