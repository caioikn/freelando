import { Col, Row } from 'react-grid-system';
import { Card } from '../../componentes/Card/Card';
import { Outlet } from 'react-router-dom';

const LayoutBaseCadastro = () => {
  return (
    <Row justify='center'>
      <Col lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
        <Card>
          <Outlet />
        </Card>
      </Col>
    </Row>
  );
};

export default LayoutBaseCadastro;
