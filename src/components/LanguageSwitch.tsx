import { useTranslation } from 'react-i18next'

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation()
  const current = i18n.language

  const setLanguage = (language: 'en' | 'ru') => {
    if (language !== current) {
      i18n.changeLanguage(language)
    }
  }

  return (
    <div
      className="language-switch"
      role="group"
      aria-label={t('language.label')}
    >
      <button
        type="button"
        className={current === 'en' ? 'language-button is-active' : 'language-button'}
        onClick={() => setLanguage('en')}
        aria-pressed={current === 'en'}
      >
        {t('language.en')}
      </button>
      <button
        type="button"
        className={current === 'ru' ? 'language-button is-active' : 'language-button'}
        onClick={() => setLanguage('ru')}
        aria-pressed={current === 'ru'}
      >
        {t('language.ru')}
      </button>
    </div>
  )
}

export default LanguageSwitch
