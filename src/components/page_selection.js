import React, { useState } from "react";

const PageSelection = ({ firstIndex, setFirstIndex, total }) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [previousDisabled, setPreviousDisabled] = useState(true);

  function nextPage(e) {
    e.preventDefault();
    if (previousDisabled) setPreviousDisabled(false)
    if (firstIndex > total - 51) setNextDisabled(true)
    setFirstIndex(firstIndex + 25);
  }

  function previousPage(e) {
    e.preventDefault();
    if (nextDisabled) setNextDisabled(false)
    if (firstIndex == 0) setPreviousDisabled(true)
    let newFirst = firstIndex - 25;
    if (newFirst < 0) newFirst = 0;
    setFirstIndex(newFirst);
  }

  function isDisabled(state) {
    return state ? "disabled" : "";
  }

  const firstShown = firstIndex + 1;
  const lastShown = firstShown + 24
  if (lastShown > total) lastShown = total

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
