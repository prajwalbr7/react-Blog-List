import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-container">
      <div className="container-row">
        <h1 className="title-style">{title}</h1>
        <p className="dis-date-style">{publishedDate}</p>
      </div>
      <p className="dis-date-style">{description}</p>
    </li>
  )
}
export default BlogItem
