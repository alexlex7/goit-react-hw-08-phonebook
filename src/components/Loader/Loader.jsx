import React from 'react';
// import { Spinner } from 'react-bootstrap';
import s from './Loader.module.css';

function Loader() {
  return (
    // <Spinner size="" animation="border" variant="danger" />
    // <div className={s.loaderWrapper}>
    <div className={s.container}>
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    // </div>
  );
}

export default Loader;
