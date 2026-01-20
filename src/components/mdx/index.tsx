import { ProductScore } from "../industrial/ProductScore";
import { ProsCons } from "../industrial/ProsCons";
import { AlertBox } from "../industrial/AlertBox";
import { HazardButton } from "../industrial/HazardButton";
import { TechSpecs } from "../industrial/TechSpecs";
import { PriceAlert } from "./PriceAlert"; // Keeping old one just in case
import { LinkCard } from "../industrial/LinkCard";
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "./Table";

export const MdxComponents = {
    ProductScore,
    ProsCons,
    AlertBox,
    HazardButton,
    TechSpecs,
    PriceAlert,
    LinkCard,
    // Mapping standard HTML table elements to our custom components
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    th: TableHeader,
    td: TableCell,
};
