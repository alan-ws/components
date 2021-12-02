import { styled } from 'goober';

const Info = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z" />
    </svg>
  );
};

type State = 'succes' | 'error';
interface IToast {
  state: State;
}

const Toast = styled('div')((props: IToast) => ({
  display: 'flex',
  background:
    props.state === 'succes'
      ? 'linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%)'
      : 'linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%)',
  'backdrop-filter': 'blur(10px)',
  'box-shadow': props.state === 'succes' ? '0 0 50px #99dbb4' : '0 0 50px #ffc39e',
  maxWidth: '384px',
  minHeight: 'fit-content',
  padding: '32px',
  borderRadius: '16px',
  '& > svg': {
    paddingRight: '24px',
    '& > path': {
      stroke: 'white',
      fill: 'white',
      'stroke-width': '1px',
    },
  },
  '& > p': {
    color: '#fcfcfc',
    margin: 0,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
}));

function Home() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Toast state="succes">
        <Info />
        <p>Email successfully submitted</p>
      </Toast>
      <br />
      <br />
      <br />
      <br />
      <Toast state="error">
        <p>Email failed submission</p>
      </Toast>
    </div>
  );
}

export default Home;
