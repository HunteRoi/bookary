interface Creator {
  role: string;
  name: string;
}

export interface MinimalBook {
  ean: string;
  title: string;
  authors: string[];
  editor: string;
  isbn10?: string | null;
  creators?: Creator[];
  image?: string | null;
  pages?: number | null;
  year?: number | null;
  resume?: string | null;
  url?: string | null;
}

export interface Book extends MinimalBook {
  id: string;
  ownerIds: string[];
  currentlyBorrowed: boolean;
}
