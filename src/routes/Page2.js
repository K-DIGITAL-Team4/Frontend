import { useEffect, useState } from "react";
import Mytable from "../components/Mytable";
import { Nav, } from "react-bootstrap";
import Mychart2 from "../components/Mychart2";


function Page2() {
  let [tab, setTab] = useState(0)

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav2">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">그래프</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }}
            eventKey="link1">테이블</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );



  function TabContent({ tab }) {
    return (
      <>
        {[
          <div className="tab2-1"><Mychart2 /></div>,
          <div className="tab2-2"><Mytable /></div>,
        ][tab]}

      </>
    );


  }
}
export default Page2;
