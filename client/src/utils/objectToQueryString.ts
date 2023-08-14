export const objectToQueryString = (obj: Record<string, any>): string => {
  const keyValuePairs: string[] = [];

  if (Object.keys(obj).length === 0) return "";

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
  }

  return "?" + keyValuePairs.join("&");
};
