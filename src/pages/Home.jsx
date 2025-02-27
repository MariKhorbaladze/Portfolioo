import { Typography, Button, Space, Row, Col, Card } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
        <Title level={1}>
          <span style={{ color: 'black' }}>Hello, I'm </span>
          <span style={{ color: 'MediumAquaMarine' }}>Mari Khorbaladze</span>
        </Title>
          <Paragraph>
            I'm an Junior Front-end Developer specializing in React. 
            I enjoy creating user-friendly interfaces that not only look 
            beautiful but also work efficiently.
          </Paragraph>
          <Space size="middle">
            <Button type="primary" size="large" icon={<DownloadOutlined />} href="/resume.pdf" target="_blank">
              Resume
            </Button>
            <Button type="default" size="large" icon={<GithubOutlined />} href="https://github.com/MariKhorbaladze" target="_blank">
              GitHub
            </Button>
            <Button type="default" size="large" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/mari-khorbaladze-7a7944264/" target="_blank">
              LinkedIn
            </Button>
          </Space>
        </Col>
        <Col xs={24} md={12}>
          <img
            // src="https://via.placeholder.com/500x500"
            // alt="Profile Photo"
            style={{ maxWidth: '100%', borderRadius: '50%' }}
          />
        </Col>
      </Row>

      <Title level={2} style={{ marginTop: 60 }}>My Skills</Title>
      <Row gutter={[16, 16]}>
        {['React', 'JavaScript ES6', 'HTML/CSS', 'Redux', 'Git'].map((skill) => (
          <Col xs={12} sm={8} md={6} key={skill}>
            <Card hoverable>
              <div style={{ textAlign: 'center' }}>
                <Title level={4}>{skill}</Title>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;