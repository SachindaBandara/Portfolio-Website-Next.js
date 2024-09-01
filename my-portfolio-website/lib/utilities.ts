export const validateString = (value: unknown, maxLength: number) => {
    if (!message || typeof message !== "string" || value.length > maxLength) {
      return false;
    }
  
    return true;
  };



  export const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Unknown error";
    }
  
    return message;
  };