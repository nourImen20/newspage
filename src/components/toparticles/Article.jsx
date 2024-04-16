import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import pic1 from '../../assets/pic1.jpg';
import pic from '../../assets/pic.jpg';
import './article.scss';
import articles from './articlesData';
var moment= require('moment'); 

const Article = ({ article, layout}) => {
 


  const renderLeftLayout = () => (
    <>
    <Row className='align-items-center'>
  <Col sm={4} className='flex-[1]'>
    <img className="imagee object-fit-fill" src={pic1} alt="" style={{ height:'280px' }} />
  </Col>
  <Col sm={8} className="flex-[2.5] d-flex flex-column justify-content-center h-100">
    <h6 className="mb-3 type-article">{article.type}</h6>
    <h2 className="mb-3">{article.title}</h2>
    <p className=" ms-2 pt-4 mb-1 "style={{ textAlign: 'justify' }}>{article.content} <a href="#" className="text-reset link-underline-dark link-danger">+ more</a></p>

    <Row className='d-flex flex-row align-items-center'>
      <div className="col-1">
        <img className="object-fit-fill rounded-full author-img" src={pic} alt="" />
      </div>
      <div className="col-6">
        <h4 className='author'>Published by Author <span className='name'>{article.author}</span></h4>
      </div>
      <div className="col-4">
        <h4 className="author">{moment(article.date).format("DD MMM YYYY")}</h4>
      </div>
    </Row>
  </Col>
</Row>

    </>
  );

  const renderRightLayout = () => (
    <>
      <Col sm={8} className="flex-[2.5] d-flex flex-column justify-content-center h-100">
        <h6 className="mb-3 type-article">{article.type}</h6>
        <h2 className="mb-3">{article.title}</h2>
        <p className=" ms-2 pt-4 mb-1 "style={{ textAlign: 'justify' }}>{article.content} <a href="#" className="text-reset link-underline-dark link-danger">+ more</a></p>

        <Row className='d-flex flex-row align-items-center'>
          <div className="col-1">
            <img className="object-fit-fill rounded-full author-img" src={pic} alt="" />
          </div>
          <div className="col-6">
            <h4 className='author'>Published by Author <span className='name'>{article.author}</span></h4>
          </div>
          <div className="col-4">
            <h4 className="author">{moment(article.date).format("DD MMM YYYY")}</h4>
          </div>
        </Row>
      </Col>
      <Col sm={4} className='flex-[1]'>
      <img className="imagee object-fit-fill" src={pic1} alt="" style={{ height:'280px' }} />
      </Col>
    </>
  );

  return (
    <div className='container-fluid'>
      <section className='block about-block'>
        <Container>
          <Row className="d-flex align-items-center mb-4">
            {layout === 'left' ? renderLeftLayout() : renderRightLayout()}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Article;
