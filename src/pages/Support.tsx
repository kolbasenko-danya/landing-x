import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePageMeta } from '../hooks/usePageMeta'

const SUPPORT_EMAIL = 'chabanovx@gmail.com'

const Support = () => {
  const { t } = useTranslation()

  usePageMeta(t('meta.supportTitle'), t('meta.supportDescription'))

  return (
    <section className="page">
      <div className="container content">
        <header className="page-header">
          <h1>{t('support.title')}</h1>
        </header>

        <p>
          {t('support.contactPrefix')}:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>

        <h2>{t('support.beforeEmailTitle')}</h2>
        <ul className="data-list">
          <li>{t('support.checklist.appVersion')}</li>
          <li>{t('support.checklist.iosVersion')}</li>
          <li>{t('support.checklist.deviceModel')}</li>
          <li>{t('support.checklist.steps')}</li>
        </ul>

        <Link to="/" className="back-link">
          {t('common.backHome')}
        </Link>
      </div>
    </section>
  )
}

export default Support
