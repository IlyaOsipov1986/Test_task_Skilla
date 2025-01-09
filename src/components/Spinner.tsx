import { Flex, Spin } from 'antd';

const Spinner: React.FC = () => (
  <Flex align="center" gap="large" className='spinner'>
    <Spin size="large" />
  </Flex>
);
export default Spinner;