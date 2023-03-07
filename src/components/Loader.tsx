import { ThreeDots } from  'react-loader-spinner'
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots 
        height="80"
        width="80"
        radius="9"
        color="#593c87"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
