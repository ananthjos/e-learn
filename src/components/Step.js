import { useNavigate } from "react-router-dom";
import "../styles/step.css";
import { stepContext } from "../context";
import MCQ from "./MCQ";
import { useContext } from "react";
import Video from "./Video";

const Step = () => {
  const { selectedStep } = useContext(stepContext);
  const [currentStep] = selectedStep;

  const navigate = useNavigate();
  return (
    <div className='step'>
      <section>
        <p>{currentStep?.content?.intro}</p>
        {currentStep.content?.description.map((obj, index) => {
          return (
            <section key={`${index}xfg`}>
              <h6>{obj.heading}</h6>
              <p>{obj.topic}</p>
            </section>
          );
        })}
      </section>

      <section className='mb-2'>
        <h6>Articles</h6>
        <h6>{currentStep.articleUrl}</h6>
      </section>
      <section>
        <div className='step-media'>
          <h5>Video Tutorial</h5>

          <Video src={currentStep.videoUrl} />
        </div>
      </section>
      <section>
        <MCQ />
      </section>
      <section className='d-flex justify-content-between mt-3'>
        <button
          className='btn btn-primary btn-custom'
          onClick={() => navigate(-1)}
        >
          Previous Step
        </button>
        <button
          className='btn btn-primary btn-custom'
          onClick={() => navigate(1)}
        >
          Next Step
        </button>
      </section>
    </div>
  );
};

export default Step;
