import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  useOutletContext,
} from "react-router-dom";
import "../Styles/step.css";

// const Step = ({ step, setStepStatus }) => {
const Step = () => {
  // const { stepIndex } = useParams();

  const params = useParams();
  let navigate = useNavigate();
  // const handleCompleteStep = () => {
  //   setStepStatus(stepIndex - 1, true);
  // };

  const handleClick = () => {};

  return (
    <div className='step'>
      {/* <h2 className='step-title'>{step.title}</h2>
      <div className='step-content'>
        <div className='step-text'>
          <p>{step.content}</p>
        </div>
      </div>
      <div className='step-media'>
        <h3>Video Tutorial</h3>
        <iframe
          width='560'
          height='315'
          src={`${step.videoUrl}`}
          // title='YouTube video player'
          // frameBorder='0'
          // allowfullscreen
        ></iframe>
      </div>
      <div className='step-media'>
        <h3>Article</h3>
        <a href={step.articleUrl} target='_blank' rel='noopener noreferrer'>
          Read the article
        </a>
      </div>
      <button onClick={handleCompleteStep}>Complete Step</button> */}
      <h1>{useParams.stepId}</h1>
      <h1>Step Component</h1>
      <button onClick={() => navigate(1)}>Next Step</button>
      <button onClick={() => navigate(-1)}>Previous Step</button>
    </div>
  );
};

export default Step;
