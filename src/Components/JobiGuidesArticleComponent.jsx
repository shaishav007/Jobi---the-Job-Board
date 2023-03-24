import React from 'react'

const JobiGuidesArticleComponent = ({data:{
    imageUrl:imageUrl,
    categories:categories,
    title:title,
    author:author
  }}) => {
  return (
    <div className='articleParent'>
        <div className="imageContainer">placeholder Image</div>
        <div className="categories">{categories}</div>
        <div className="title">{title}</div>
        <div className="author">
            By  <span className='name'>{author}</span>
        </div>
    </div>
  )
}

export default JobiGuidesArticleComponent