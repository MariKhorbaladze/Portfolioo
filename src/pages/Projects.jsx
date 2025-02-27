
import { Typography, Row, Col, Card, Tag, Button, Space } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const projectsData = [
  {
    id: 1,
    title: 'University list with API integration ',
    description: 'React and Ant design fully functionality. university list with API integration, plus it shows the current weather in tbilisi Dynamically, it`s so easy to use.',
    tags: ['React', 'Context API', 'Ant Design', 'Responsive'],
    github: 'https://github.com/MariKhorbaladze/university-REST-API',
    demo: 'https://universitylistwithweather.netlify.app/'
    
  },
  {
    id: 2,
    title: 'Similar to "myauto.ge"',
    description: 'The platform offers a user-friendly interface with advanced search filters, allowing users to efficiently browse cars, based on price, brand, model, year.',
    tags: ['React', 'Tailwind CSS', 'Context API', 'Responsive'],
    github: 'https://github.com/MariKhorbaladze/simmilar-to-myauto.ge-',
    demo: 'https://simmilartomyauto.netlify.app/'
    
  },
];

const Projects = () => {
  return (
    <div>
      <Title>My Projects</Title>
      <Paragraph>
        Here are some of my projects that showcase my skills and experience.
      </Paragraph>

      <Row gutter={[50, 30]}>
        {projectsData.map((project) => (
          <Col xs={24} md={12} xl={8} key={project.id}>
            <Card
              hoverable
              actions={[
                <Button key="github" type="link" icon={<GithubOutlined />} href={project.github} target="_blank">
                  GitHub
                </Button>,
                <Button key="demo" type="link" icon={<GlobalOutlined />} href={project.demo} target="_blank">
                  Live Demo
                </Button>,
              ]}
            >
              <Meta title={project.title} description={project.description} />
              <div style={{ marginTop: 15 }}>
                <Space size={[0, 8]} wrap>
                  {project.tags.map((tag) => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;