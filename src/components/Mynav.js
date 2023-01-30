import { useEffect, useState } from "react";
import { Form, Nav, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Mytable from "./Mytable";
import "./Main.css";


function Mynav() {
  let [tab, setTab] = useState(1)

  let { db } = useSelector((state) => { return state })

  // console.log(db)
  // console.log(typeof (db))

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav1">
        <Nav.Item>

          <Nav.Link onClick={() => { setTab(0) }}
            eventKey="link0">모든 차량 조회</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">차량별 안전등급 확인</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }}
            eventKey="link2" >
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
      <TabContent tab={tab} />
    </>
  );


  function TabContent({ tab }) {
    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => { setFade('end1') }, 100)
      return () => { setFade('') }
    }, [tab])

    return (
      <div className={`start1 ${fade}`}>
        {[
          <div className="tab1">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>차량번호</th>
                  <th>평균속도</th>
                  <th>급가속횟수</th>
                  <th>급감속횟수</th>
                  <th>x좌표</th>
                  <th>y좌표</th>
                  <th>결과값</th>
                </tr>
              </thead>
              <tbody>
                {
                  db.map((a, i) =>
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{i}</td>
                      <td>{a.y_gps}</td>
                      <td>{a.x_gps}</td>
                      <td>{a.result}</td>
                    </tr>
                  )
                }


              </tbody>
            </Table>
          </div>,

          <div className="tab2">
            <>
              <Form.Select aria-label="Default select example">
                <option>차량번호 선택</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Mytable />

            </>
          </div>,


        ][tab]}
      </div>


    );

  }
}
export default Mynav;
