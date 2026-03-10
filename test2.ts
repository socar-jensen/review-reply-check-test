export function validate(input: string): boolean {
  if (!input) return false;
  return input.length > 0;
}
