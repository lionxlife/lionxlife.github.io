import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <Link to="/" className="header__logo is-block t-relative fn-logo">
      <img
        src="/images/logo-white.png"
        alt="White LXL Logo"
        className="header__logo--w is-block"
      />
      <img
        src="/images/logo-black.png"
        alt="Black LXL Logo"
        className="header__logo--b is-block t-absolute"
      />
    </Link>
  )
}
