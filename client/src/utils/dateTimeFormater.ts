export const dateTimeFormater = (
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  const opt = options || {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", opt);
  return formatter.format(date);
};
