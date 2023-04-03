import React from 'react'

const JobSearchBarComponent = ({centered:centered}) => {
  return (
    <div class="searchbarParent">
        <form className={
          centered?
          "searchInputForm centered"
          :"searchInputForm"
        }

        >
          <div className="occupation">
            <label htmlFor="occupation"> What are you looking for?</label>
            <input type="text" placeholder='UX Designer'/>
          </div>
          <div className="category">
            <label htmlFor="category"> Category </label>
            <input type="dropdown" placeholder='Web Design'/>
          </div>
          <button className="submit"> search</button>
        </form>
    </div>
  )
}

export default JobSearchBarComponent