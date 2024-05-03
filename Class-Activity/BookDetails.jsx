import React, { useState } from 'react';
import './BookDetails.css';

const BookDetails = () => {
  const [books, setBooks] = useState([
    { id: 1, name: 'Harry Potter', genre: 'Suspense', publishDate: '2012-01-01', description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry', status: 'Available' },
    { id: 2, name: 'The Lord of the rings', genre: 'Fantasy', publishDate: '2021-12-15', description: 'The Lord of the Rings is an high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkiens 1937 childrens book The Hobbit, but eventually developed into a much larger work. ', status: 'Unavailable' },
    { id: 3, name: 'Alchemist', genre: 'Adventure', publishDate: '2011-10-10', description: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. From his home in Spain he journeys to the markets of Tangiers and across the Egyptian desert to a fateful encounter with the alchemist.', status: 'Unavailable' },
    { id: 4, name: 'The great gatsby', genre: 'Fiction', publishDate: '2022-12-19', description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover, Daisy Buchanan', status: 'Available' },
    { id: 5, name: 'To Kill a Mockingbird', genre: 'Classic', publishDate: '1960-07-11', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quaerat odit fugit nihil mollitia libero est officiis neque dolorem, deleniti ullam et veniam veritatis adipisci ipsam eligendi vero amet!', status: 'Available' },
  { id: 6, name: '1984', genre: 'Dystopian', publishDate: '1949-06-08', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quaerat odit fugit nihil mollitia libero est officiis neque dolorem, deleniti ullam et veniam veritatis adipisci ipsam eligendi vero amet!', status: 'Available' },
  { id: 7, name: 'Pride and Prejudice', genre: 'Romance', publishDate: '1813-01-28', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quaerat odit fugit nihil mollitia libero est officiis neque dolorem, deleniti ullam et veniam veritatis adipisci ipsam eligendi vero amet!', status: 'Available' },
  ]);

  const [viewMode, setViewMode] = useState('list');

  const [searchQuery, setSearchQuery] = useState('');

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">

    <h1 className='Main-Heading'>Book List:</h1>
      
      <input
        type="text"
        placeholder="Search book..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
  
      
    <button onClick={toggleViewMode} className="toggle-button">
      {viewMode === 'list' ? 'Grid View' : 'List View'}
    </button>
  
      <div className={viewMode === 'grid' ? 'grid-container' : 'list-container'}>
        {viewMode === 'grid' ? (
          filteredBooks.map(book => (
            <div key={book.id} className="grid-item">
              <h2>{book.name}</h2>
              <p>{book.genre} </p>
            </div>
          ))
        ) : (
          <table className="list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Publish</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.publishDate}</td>
                  <td>{book.description}</td>
                  <td>{book.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
