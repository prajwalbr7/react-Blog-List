// Write your JS code here

import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="ul-container">
      {blogsList.map(eachItem => (
        <BlogItem blogDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}
export default BlogList
