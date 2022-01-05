import React from "react";


const PageSelection = ({ firstIndex, setFirstIndex, total }) => {
  function nextPage(e) {
    e.preventDefault();
    setFirstIndex(firstIndex + 25);
  }

  function previousPage(e) {
    e.preventDefault();
    let newFirst = firstIndex - 25;
    if (newFirst < 0) newFirst = 0;
    setFirstIndex(newFirst);
  }

  return (
    <div className="pagination">
      <p>Showing {firstIndex + 1}-{firstIndex + 25} of {total}</p>
      <button onClick={previousPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  )
}

export default PageSelection;
