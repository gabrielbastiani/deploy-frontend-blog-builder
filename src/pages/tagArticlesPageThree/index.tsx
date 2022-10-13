import { ArticlesTag3 } from '../../components/ArticlesTag3/index'
import { FooterBlog } from '../../components/FooterBlog/index'
import { HeaderBlog } from '../../components/HeaderBlog/index'
import { Newslatter } from '../../components/Newslatter/index'
import { RecentPosts } from '../../components/RecentPosts/index'
import { SearchBar } from '../../components/SearchBar/index'
import styles from '../../../styles/home.module.scss'


export default function TagArticlesPageOne() {

  return (
    <>
      <main className={styles.mainContent}>
        <HeaderBlog />
        <section className={styles.sectionContent}>
          <nav>
            <SearchBar />
            <RecentPosts />
          </nav>
          <article>
            <Newslatter />
            <ArticlesTag3 />
          </article>
        </section>

      </main>
      <FooterBlog />
    </>
  )
}