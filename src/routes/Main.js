import "../components/Main.css";
import Mynavbar from "../components/Mynavbar";
import Mysection from "../components/Mysection";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

function Main() {
  let { test } = useSelector((state) => { return state })
  let { drive } = useSelector((state) => { return state })
  let { vehicle } = useSelector((state) => { return state })




  // let test = [1, 2, 3, 4]
  // let test2 = []

  // let abc = test.map((a) => {
  //   if (a > 2) {
  //     test2.push(a);
  //   }
  // })

  // console.log('drive', drive)
  // console.log('vehicle', vehicle)
  return (
    <>
      <Mynavbar />

      {/* <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/img/business01.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/img/business02.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Mysection />

    </>
  );
}
export default Main;


