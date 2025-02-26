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
                  <Link href="mailto:your.email@example.com">your.email@example.com</Link>
                </Paragraph>
              </div>
              
              <div>
                <PhoneOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Phone:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  <Link href="tel:+995500000000">+995 500 00 00 00</Link>
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
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <GithubOutlined style={{ fontSize: '24px' }} /> GitHub
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: '24px' }} /> LinkedIn
              </Link>
              {/* You can add other social media links */}
            </Space>
          </Card>
        </Col>
        
        <Col xs={24} md={12}>
          <Card title="Working Hours" bordered={false}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <CalendarOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Monday - Friday:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  10:00 AM - 6:00 PM
                </Paragraph>
              </div>
              <div>
                <CalendarOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>Saturday - Sunday:</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  Rest days
                </Paragraph>
              </div>
            </Space>
          </Card>

          <Card title="Frequently Asked Questions" bordered={false} style={{ marginTop: 24 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <MessageOutlined style={{ fontSize: '18px', marginRight: 12 }} />
                <Text strong>What types of projects do you work on?</Text>
                <Paragraph style={{ marginLeft: 30 }}>
                  I work on web applications with React, mobile applications, and UI/UX design projects.
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