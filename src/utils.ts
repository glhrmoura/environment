const clearstr = (str: string) => str?.replace(/[\s"']/g, '');

const getArgs = (args: string[], defaultValue: string) => {
  const argIndex = process.argv.findIndex((argItem) => args.includes(argItem));

  if (argIndex < 0) return defaultValue;

  const argValue = process.argv[argIndex + 1];
  const argValueIsValid = argValue && !argValue.startsWith('-');

  return argValueIsValid ? argValue : (defaultValue ?? true);
};

export const Utils = {
  clearstr,
  getArgs,
}
