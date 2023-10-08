import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <ThreeCircles
        height="100"
        width="100"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="red"
        innerCircleColor="blue"
        middleCircleColor="black"
      />
    </div>
  );
}
