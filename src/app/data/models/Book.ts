interface Creator {
  role: string;
  name: string;
}

export interface Book {
  id: string;
  isbn10: string;
  ean: string;
  title: string;
  authors: string[];
  creators?: Creator[];
  editor: string;
  image?: string;
  pages?: number;
  year?: number;
  resume?: string;
  url?: string;
  ownerIds: string[];
  currentlyBorrowed: boolean;
}
