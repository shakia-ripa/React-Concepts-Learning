import './Book.css';
export default function Book({book}){
    return (
        <div className='book'>
            <h3>Book Name: {book.name}</h3>
            <h2>Price: {book.price}</h2>
        </div>
    )
}