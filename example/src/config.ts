import {createLittera} from "@assembless/react-littera"


const LOCALES = [ "en_US", "de_DE", "pl_PL", "no_NO", "jp_JP" ] as const;

const PRESET = {
  "en_US": {
    "language": "Language",
    yes: "Yes",
    no: "No",
  },
  "de_DE": {
    "language": "Sprache",
    yes: "Ja",
    no: "Nein",
  },
  "pl_PL": {
    "language": "Język",
    yes: "Tak",
    no: "Nie",
  },
  "no_NO": {
    "language": "Språk",
    yes: "Ja",
    no: "Nei",
  },
  "jp_JP": {
    "language": "言語",
    yes: "はい",
    no: "いいえ",
  }
}
const { LitteraService, makeTranslations, useLitteraMethods} = createLittera(LOCALES, PRESET);

export { LitteraService, makeTranslations, useLitteraMethods };