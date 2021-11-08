import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header"
import "antd/dist/antd.css";
import { Layout } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact path="/" component={ShowMagic} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
