import { experiencesEn } from "./experiences.en";
import { experiencesTr } from "./experiences.tr";
import { experiencesFa } from "./experiences.fa";

export function getExperiences(locale: string) {
  switch (locale) {
    case "fa":
      return experiencesFa;
    case "tr":
      return experiencesTr;
    case "en":
    default:
      return experiencesEn;
  }
}
