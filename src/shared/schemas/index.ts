import * as z from "zod";

// ZOD resolver araştır, burada validation yapılacak.
// Örnek olarak giriş yapmak için LoginSchema yapılacak, içerisinde email ve password alanları olacak.

const noSpaces = (value: string) => {
  if (value.includes(" ")) {
    return false;
  } else {
    return true;
  }
};
