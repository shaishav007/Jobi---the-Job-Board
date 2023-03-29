import React from 'react'

const JobSearchBarComponent = () => {
  return (
    <div class="searchbarParent">
        <form class="searchInputForm">
          <div class="occupation">
            <label htmlFor="occupation"> What are you looking for?</label>
            <input type="text" placeholder='UX Designer'/>
          </div>
          <div class="category">
            <label htmlFor="category"> Category </label>
            <input type="dropdown" placeholder='Web Design'/>
          </div>
          <button class="submit"> search</button>
        </form>
    </div>
  )
}

export default JobSearchBarComponent