import { Row, Col, Carousel, Container } from "react-bootstrap";
import { CarouselNavigationIcon } from "../experiences/experiencesComponents";
import loaderStyle from './loaders.module.css';

export function SkeletonLoadingAnimation({ experienceStyle }) {
    return (
        <Container className={`${experienceStyle.spacing}`}>
            <div className={`${experienceStyle.projectItem}`}>
                <h1 className={`${loaderStyle.skeletonH1} ${loaderStyle.skeleton}`}></h1>
                <Carousel interval={null} prevIcon={<CarouselNavigationIcon skeletonStyle={loaderStyle} isPreviousIcon={true} />} nextIcon={<CarouselNavigationIcon isPreviousIcon={false} />} className={`${experienceStyle.spacing}`}>
                    <Carousel.Item>
                        <Row className={`${experienceStyle.spacing} ${experienceStyle.imageRow}`}>
                            <Col className="vertical-centre">
                                <div  className={`${experienceStyle.pictures} ${loaderStyle.image} ${loaderStyle.skeleton}`}></div>
                            </Col>
                            <Col className="vertical-centre">
                                <div className={`${loaderStyle.image} ${loaderStyle.skeleton}`}></div>
                            </Col>
                        </Row>
                    </Carousel.Item>

                </Carousel>
                <p className={`${experienceStyle.spacing} ${loaderStyle.aboutP} ${loaderStyle.skeleton}`}></p>
                <p className={`${experienceStyle.spacing} ${loaderStyle.descriptionP} ${loaderStyle.skeleton}`}></p>
                <a className={`${experienceStyle.spacing} ${loaderStyle.a} ${loaderStyle.skeleton}`} ></a>
            </div>
        </Container>
    );
}