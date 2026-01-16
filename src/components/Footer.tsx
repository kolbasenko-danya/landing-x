import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">{t('footer.copyright')}</span>
        <div className="footer-links">
          <Link to="/privacy">{t('footer.privacy')}</Link>
          <Link to="/support">{t('footer.support')}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
