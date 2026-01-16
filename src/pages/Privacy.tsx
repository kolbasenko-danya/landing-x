import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePageMeta } from '../hooks/usePageMeta'

const Privacy = () => {
  const { t } = useTranslation()

  usePageMeta(t('meta.privacyTitle'), t('meta.privacyDescription'))

  return (
    <section className="page">
      <div className="container content">
        <header className="page-header">
          <h1>{t('privacy.title')}</h1>
          <p className="meta">{t('privacy.effectiveDate')}</p>
        </header>

        <p>{t('privacy.intro')}</p>

        <h2>{t('privacy.dataLinkedTitle')}</h2>
        <p>{t('privacy.dataLinkedIntro')}</p>

        <ul className="data-list">
          <li>{t('privacy.dataTypes.identifiers')}</li>
          <li>{t('privacy.dataTypes.userId')}</li>
          <li>{t('privacy.dataTypes.diagnostics')}</li>
          <li>{t('privacy.dataTypes.crashData')}</li>
          <li>{t('privacy.dataTypes.performanceData')}</li>
          <li>{t('privacy.dataTypes.otherDiagnosticData')}</li>
          <li>{t('privacy.dataTypes.healthFitness')}</li>
          <li>{t('privacy.dataTypes.fitness')}</li>
          <li>{t('privacy.dataTypes.usageData')}</li>
          <li>{t('privacy.dataTypes.productInteraction')}</li>
        </ul>

        <p>
          {t('privacy.clarification')}{' '}
          <Link to="/support">{t('privacy.contactLink')}</Link>.
        </p>

        <Link to="/" className="back-link">
          {t('common.backHome')}
        </Link>
      </div>
    </section>
  )
}

export default Privacy
