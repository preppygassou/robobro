import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '10px solid white',
      borderRadius: '4px', margin: '30px 20px 0 30px',
      paddingTop: '30px', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;