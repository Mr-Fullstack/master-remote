import { ProviderExoticComponent, ProviderProps } from "react";

export type FontSizes = {
  [key: string] : string;
};

export const lightColors = {
  primary:"#2A3781",
  secondary:"#1AADE0",
  text:"#333",
  background:"#FFF",
  buttonPrimary:"#2A3781",
  buttonSecondary:"#CCC",
  danger:"#FF6A6A"
}

export const darkColors = {
  primary:"#2A3781",
  secondary:"#1AADE0",
  text:"#333",
  background:"#FFF",
  buttonPrimary:"#2A3781",
  buttonSecondary:"#CCC",
  danger:"#FF6A6A"
}

const font = {
  weight:{
    black:"RobotoSlab-Black",
    regular:"RobotoSlab-Regular"
  },
  sizes:{
    "x1":12,
    "x2":14,
    "x3":16,
    "x4":18,
    "x5":20,
    "x6":22,
    "x7":24,
    "x8":28,
    "x9":30,
    "x10":32,
  }
}

export default {
  colors:lightColors,
  font
};