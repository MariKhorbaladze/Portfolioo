import { Layout, Typography } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      <Text>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</Text>
    </AntFooter>
  );
};

export default Footer;