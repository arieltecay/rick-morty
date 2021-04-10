const Header = ({ title }) => {
  return (
      <header>
        <div className="container">
          <div className="content">
            <div className="title">{title}</div>
          </div>
        </div>
      </header>
  );
};

export default Header;
