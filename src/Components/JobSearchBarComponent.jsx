import React from 'react'

const JobSearchBarComponent = () => {
  return (
    <div class="flexParent">
        <form class="searchInput">
        <div class="searchBar">
            <label for="occupation"> Occupation</label>
            <input type="text"/>
          </div>
          <div class="category">
            <label for="category"> Category </label>
            <input type="dropdown"/>
          </div>
          <button class="submit"> search</button>
        </form>
    </div>
  )
}

export default JobSearchBarComponent