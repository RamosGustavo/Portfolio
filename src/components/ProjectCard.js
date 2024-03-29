import { Col } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={13} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a href={href} target="blank">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}


