import React from 'react'

const JobSearchBarComponent = () => {
  return (
    <div class="searchbarParent">
        <form class="searchInputForm">
          <div class="occupation">
            <label htmlFor="occupation"> Occupation</label>
            <input type="text"/>
          </div>
          <div class="category">
            <label htmlFor="category"> Category </label>
            <input type="dropdown"/>
          </div>
          <button class="submit"> search</button>
        </form>
    </div>
  )
}

export default JobSearchBarComponent