import styles from "@/styles/Header.module.css";


const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
    return (
      <header style={headerStyle} className={"styles.header"}>
        {props.children}
        <p>Items will persist in the browser local storage</p>
      </header>
    );
  };
  export default Header;