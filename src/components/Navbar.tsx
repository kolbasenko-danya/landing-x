import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="nav-logo" to="/">
          Gym Genius
        </Link>
        <nav className="nav-links" aria-label={t('nav.ariaLabel')}>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link is-active' : 'nav-link'
            }
            to="/"
            end
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link is-active' : 'nav-link'
            }
            to="/privacy"
          >
            {t('nav.privacy')}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'nav-link is-active' : 'nav-link'
            }
            to="/support"
          >
            {t('nav.support')}
          </NavLink>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  )
}

export default Navbar
