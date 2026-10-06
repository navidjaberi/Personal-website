import { projectsEn } from "./projects.en";
import { projectsTr } from "./projects.tr";
import { projectsFa } from "./projects.fa";

export function getProjects(locale: string) {
  switch (locale) {
    case "fa":
      return projectsFa;
    case "tr":
      return projectsTr;
    case "en":
    default:
      return projectsEn;
  }
}
