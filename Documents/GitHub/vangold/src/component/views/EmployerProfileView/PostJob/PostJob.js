import { Container, Row, Col } from "react-bootstrap";
import PostJobStepper from "./PostJobStepper/PostJobStepper";
import SideMenu from "../../../core-ui/SideMenu/SideMenu";
import "./PostJob.css";

const ProfilePostJob = ({ showSideMenu, setShowSideMenu }) => {
  return (
    <div id="postjob" className="post__job-container mb-5">
      <Col
        xs={12}
        lg={2}
        className={`mt-lg-4 ${
          !showSideMenu ? "d-none d-lg-block" : "mb-5"
        }`}
      >
        <SideMenu
          showSideMenu={showSideMenu}
          setShowSideMenu={setShowSideMenu}
        />
      </Col>
      <div className="right_post__job-container">
        <Container>
          <Row>
            <div className="">
              <h1>Let’s help you post your first job</h1>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <PostJobStepper />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfilePostJob;
