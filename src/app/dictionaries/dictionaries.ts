"server-only";

interface Dictionaries {
  [key: string]: () => Promise<{
    [key: string]: any;
  }>;
}

const dictionaries: Dictionaries = {
  de: () => import("./de.json").then((module) => module.default),
  "en-US": () => import("./en.json").then((module) => module.default),
  "zh-cn": () => import("./zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  console.log(locale);
  return await dictionaries[locale]();
};

// export const getDictionary = async (locale: string) => {
//   const method = dictionaries[locale];
//   if (method) {
//     const dictionary = await method();
//     // Do something with the dictionary
//     console.log(dictionary);
//   } else {
//     console.error(`Dictionary not found for locale: ${locale}`);
//   }
// };
