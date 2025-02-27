import { Typography, Row, Col, Card, Space, Divider } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined, 
  GithubOutlined, 
  LinkedinOutlined,
  MessageOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

const Contact = () => {
  return (
    <div>
      <Title>Contact Me</Title>
      <Paragraph>
        Interested in my services or want to know more about my projects? 
        Use the contact information below to get in touch.
      </Paragraph>

      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card title="Contact Information" bordered={false}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <MailOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Email:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  <Link href="mailto:your.email@example.com">khorbaladzeemariam@gmail.com</Link>
                </Paragraph>
              </div>
              
              <div>
                <PhoneOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Phone:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  <Link href="tel:+995050539">+995 557 05 05 39</Link>
                </Paragraph>
              </div>
              
              <div>
                <HomeOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Location:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  Tbilisi, Georgia
                </Paragraph>
              </div>
            </Space>
          </Card>

          <Card title="Social Media" bordered={false} style={{ marginTop: 24 }}>
            <Space size="large" wrap>
              <Link href="https://github.com/MariKhorbaladze" target="_blank" rel="noopener noreferrer">
                <GithubOutlined style={{ fontSize: '24px' }} /> GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/mari-khorbaladze-7a7944264/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: '24px' }} /> LinkedIn
              </Link>
            </Space>
          </Card>
        </Col>
        
        <Col xs={24} md={12}>
          <Card title="Employment type" bordered={false}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <CalendarOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Full-time, Internship</Text>
                {/* <Paragraph style={{ marginLeft: 30 }}>
                  10:00 AM - 6:00 PM
                </Paragraph> */}
              </div>
              <div>
                <CalendarOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>On-Site, Remote, Hybrid</Text>
                {/* <Paragraph style={{ marginLeft: 30 }}>
                  Rest days
                </Paragraph> */}
              </div>
            </Space>
          </Card>

          <Card title="Frequently Asked Questions" bordered={false} style={{ marginTop: 24 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <MessageOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>What types of projects do you work on?</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  I work on web applications with React. I create user-friendly interface.
                </Paragraph>
              </div>
              
              <div>
                <UserOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>How do we start collaborating?</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  Contact me via email or phone to discuss your project idea.
                </Paragraph>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Divider />
      
      <Row justify="center" style={{ marginTop: 40, marginBottom: 20 }}>
        <Col>
          <Paragraph>
            Thank you for visiting my portfolio! I look forward to new projects from you.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;