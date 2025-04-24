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
          <Paragraph style={{letterSpacing: '1px', color: 'DarkBlue' }}>
            I'm an Junior Front-end Developer specializing in React. 
            I enjoy creating user-friendly interfaces that not only look 
            beautiful but also work efficiently.
          </Paragraph>
          <Space size="middle">
            <Button 
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              href="/src/assets/cv.pdf"
              target="_blank"
              download="resumeMariKhorbaladze.pdf"
              data-filetype="application/pdf"
            >
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
        </Col>
      </Row>
      <Title level={2} style={{ marginTop: 60 }}>My Skills</Title>
      <Row gutter={[16, 16]}>
        {['React.js', 'React Native', 'REST API', 'JavaScript ES6', 'HTML5/CSS3', 'Redux Toolkit', 'Context API', 'Git/Github Version Control', 'Teamwork', 'Ant Design','Problem Solving', 'Bootstrap', 'Responsive Web Design', 'Tailwind'].map((skill) => (
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