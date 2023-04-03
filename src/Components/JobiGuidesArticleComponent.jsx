import React from 'react'

const JobiGuidesArticleComponent = ({data:{
    imageUrl:imageUrl,
    categories:categories,
    title:title,
    author:author
  }}) => {
  return (
    <li className='articleParent'>
        <div className="imageContainer"></div>
        <div className="categories">{categories}</div>
        <div className="title">{title}</div>
        <div className="author">
            By  <span className='name'>{author}</span>
        </div>
    </li>
  )
}

export default JobiGuidesArticleComponent