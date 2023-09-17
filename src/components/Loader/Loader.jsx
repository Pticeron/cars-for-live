import { Hearts } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.box}>
      <Hearts
        height="150"
        width="150"
        color="#FFC107"
        ariaLabel="hearts-loading"
        wrapperClass={css.loader}
        visible={true}
      />
    </div>
  );
};

export default Loader;
