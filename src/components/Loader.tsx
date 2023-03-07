import { ThreeDots } from  'react-loader-spinner'

const Loader = () => {
  return (
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
  );
};

export default Loader;
