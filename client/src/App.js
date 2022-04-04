import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Routers from "./routes";
import "./App.css";

const App = () => {
  return (
    <Layout className="layout">
      <Content className="content">
        <Routers />
      </Content>
    </Layout>
  );
};

export default App;
