import { Typography, Row, Col, Timeline, Card } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
      <Title>About Me</Title>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Paragraph>
          <Title level={3}>
            <span style={{ color: 'black' }}>Hello, I'm </span>
            <span style={{ color: 'MediumAquaMarine' }}>Mari Khorbaladze</span>
          </Title>
          </Paragraph>
          <Paragraph>
          Although I am still a junior specialist, I have big plans for the future. I constantly strive for self-improvement and acquiring new skills in my field. I enjoy challenges and problem-solving as they provide opportunities for professional growth. I am goal-oriented, organized, and responsible, capable of working effectively both independently and in a team. My aim is to find a position where I can fully realize my potential and contribute to the company's success.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Education and Certifications">
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <Title level={5}>Front-end Development with React.JS</Title>
                      <Paragraph>[Smart Academy] - [2024]</Paragraph>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <Title level={5}>Bachelor of Business administration in Tourism</Title>
                      <Paragraph>[Tbilisi State University] - [2022-current]</Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
