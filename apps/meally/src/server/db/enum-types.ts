import * as z from "zod";
import { fonts, theme } from "./zodEnums";

export type TFont = z.infer<typeof fonts>;

export type TTheme = z.infer<typeof theme>;
