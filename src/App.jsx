import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailRecipe from './pages/DetailRecipe'
import BlogArticleList from './pages/BlogArticleList'
import Contact from './pages/Contact'
import DetailBlogArticle from './pages/DetailBlogArticle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* route lain opsional */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe_detail" element={<DetailRecipe />} />
        <Route path="/blog_article_detail" element={<DetailBlogArticle />} />
        <Route path="/blog_article_list" element={<BlogArticleList />} />
      </Routes>
    </BrowserRouter>
  )
}
