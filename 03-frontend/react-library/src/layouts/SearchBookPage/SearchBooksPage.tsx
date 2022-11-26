import { useState } from "react"
import BookModel from "../../models/BookModels"

export const SearchBooksPage = () => {
    
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    
}