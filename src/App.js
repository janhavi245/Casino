import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { makeStyles } from "@material-ui/core/styles";

const usestyles=makeStyles((theme)=> ({
  bg : {
    height: "100%",
    width: "100%"
  }
}));

function App() {
  const cls=usestyles();
  return (
    <div className={cls.bg}>
      <Header />
      <Footer />
      <Content />
    </div>
  );
}

export default App;
