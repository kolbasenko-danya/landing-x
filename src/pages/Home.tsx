import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePageMeta } from '../hooks/usePageMeta'

const Home = () => {
  const { t } = useTranslation()

  usePageMeta(t('meta.homeTitle'), t('meta.homeDescription'))

  return (
    <section className="page">
      <div className="container">
        <div className="hero">
          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
        </div>
        <div className="cards">
          <Link to="/privacy" className="card">
            <h2 className="card-title">{t('home.cards.privacy.title')}</h2>
            <p className="card-text">{t('home.cards.privacy.text')}</p>
          </Link>
          <Link to="/support" className="card">
            <h2 className="card-title">{t('home.cards.support.title')}</h2>
            <p className="card-text">{t('home.cards.support.text')}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
