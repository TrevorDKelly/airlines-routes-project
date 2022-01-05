import React, { useState } from "react";

const PageSelection = ({ firstIndex, setFirstIndex, total, perPage }) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [previousDisabled, setPreviousDisabled] = useState(true);

  function nextPage(e) {
    e.preventDefault();
    if (previousDisabled) setPreviousDisabled(false)
    if (firstIndex + perPage > total - perPage - 1) setNextDisabled(true)
    setFirstIndex(firstIndex + perPage);
  }

  function previousPage(e) {
    e.preventDefault();
    if (nextDisabled) setNextDisabled(false)
    let newFirst = firstIndex - perPage;
    if (newFirst < 0) newFirst = 0;
    if (newFirst === 0) setPreviousDisabled(true)
    setFirstIndex(newFirst);
  }

  const firstShown = firstIndex + 1;
  let lastShown = firstShown + perPage - 1;
  if (lastShown > total) lastShown = total;

  return (
    <div className="pagination">
      <p>Showing {firstShown}-{lastShown} of {total}</p>
      <button disabled={previousDisabled} onClick={previousPage}>
        Previous Page
      </button>
      <button disabled={nextDisabled} onClick={nextPage}>
        Next Page
      </button>
    </div>
  )
}

export default PageSelection;
