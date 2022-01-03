import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
    return <Component { ...pageProps }/>;
};

export { App as default };