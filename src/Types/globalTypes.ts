export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

export interface IWishlist {
  _id: string;
  book: {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    // Add other properties of the book if needed
  };
  // Add other properties of the wishlist if needed
}
export interface IReadinglist {
  _id: string;
  book: {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    // Add other properties of the book if needed
  };
  isCompleted: boolean;
  // Add other properties of the wishlist if needed
}
