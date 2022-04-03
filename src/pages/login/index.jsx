import RegisterLogin from '../../components/common/RegisterLogin';

const Login = () => {
  return (
    <RegisterLogin
      onClick={() => alert('login successfull')}
      head='Login'
      route='register'
      link='Register'
      question='Don&#39;t have an account?'
    />
  );
};

export default Login;
