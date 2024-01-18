// Where I define the password handling
const bcrypt = require("bcrypt");
const saltRounds = 10;

// method to create hashed password
export const hashPassword = async (input: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(input, saltRounds);
    return hash;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// method to compare password
export const hashCompare = async (
  input: string,
  hash: string,
): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(input, hash);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
