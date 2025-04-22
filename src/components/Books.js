import React, { useState } from "react";

// Tip 1: Remember to use the useState hook to create your state.
// Tip 2: Initialize your state with a list of 3(!) book titles as strings.

export default function Books() {
  // Tip 3: Define your state here using useState.
  const [books] = useState(["Title1", "Tile2", "Title3"]);

  return (
    <div>
      {/* Tip 4: Use the map function to render your list of books within a <ul>. */}
      <h1>Books list goes here</h1>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
