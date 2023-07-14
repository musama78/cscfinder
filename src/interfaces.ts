import { CSC, Badge } from "@prisma/client";

export interface EntriesProps {
  entries: (CSC & { badges: Badge[] })[];
}
