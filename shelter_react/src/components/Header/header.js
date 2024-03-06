import "./Header.css";

const Header = () => {
  return (
    <header className="wrap header">
      <a href="" class="logo">
        <p class="logo__title">Cozy House</p>
        <p class="logo__subtitle">Shelter for pets in Boston</p>
      </a>
      <ul class="menu-list" id="menu_list">
        <li class="header__li_active"><a href="" class="menu-item">About the shelter</a></li>
        <li><a href="" class="menu-item">Our pets</a></li>
        <li><a href="" id="help_link" class="menu-item">Help the shelter</a></li>
        <li><a href="" class="menu-item" id="contacts_link">Contacts</a></li>
      </ul>
    </header>
    
  )
}

export default Header;