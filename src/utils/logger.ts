export const log = (type: "error" | "warn" | "log", ...message: any[]) => {
  console[type]("[react-littera]", ...message);
}