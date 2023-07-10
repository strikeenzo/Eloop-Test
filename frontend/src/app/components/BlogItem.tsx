import { ArticleType } from '../store/modules/home'

type PropType = {
  article: ArticleType
}

const BlogItem = ({ article }: PropType) => {
  return (
    <div className='border-b-2 py-5 grid grid-cols-4'>
      <div className='col-span-4 md:col-span-3'>
        <span className='text-gray-400'>{article.created_date}</span>
        <a href={article.article_url} target='_blank'>
          <h3 className='text-[20px] font-medium my-3'>{article.article_title}</h3>
        </a>
        <p>{article.article_content}</p>
      </div>
      <div className='col-span-4 md:col-span-1 mx-auto my-auto'>
        <img src={article.article_img} />
      </div>
    </div>
  )
}

export default BlogItem
