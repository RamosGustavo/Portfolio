import { Col } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={13} sm={6} md={4}>
      <div className="proj-imgbx">
        <a><img src={imgUrl} /></a>
        {/*  <div className="proj-txtx">
            <h4>{title}</h4> 
            <span>{description}</span> 
        </div> */}
      </div>
    </Col>
  )
}


