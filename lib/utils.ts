export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getToken = () => {
  const match = document.cookie.match("(^|;)\\s*token\\s*=\\s*([^;]+)");
  return match ? match[2] : null;
};

export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};


export const getNestedValueSearch = <T extends Record<string, unknown>>(
  obj: T, 
  path: string | number | symbol
): unknown => {
  const stringPath = String(path);
  const parts = stringPath.split('.');
  
  let result: unknown = obj;
  
  for (const part of parts) {
    if (result !== null && typeof result === 'object' && part in result) {
      result = (result as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  
  return result;
};