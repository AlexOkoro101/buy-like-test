import anime from 'animejs';

const about = () => {
  if (typeof window !== 'undefined') {
    var myAnimation = anime({
      targets: ['.red','.orange','.yellow','.green','.blue','.purple','.pink'],
      translateX: '13rem',
      rotate: 360,
      borderRadius: '0px',
      duration: 2000,
      loop: true
    });
  }
  return (
    <div style={{marginTop: '80px'}}>
      <div className="red" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
      <div className="orange" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
      <div className="yellow" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
      <div className="green" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
      <div className="blue" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
      <div className="purple" style={{ width: '2rem', height: '2rem', margin:' .3rem', background: 'red'}}></div>
    </div>
  );
};

export default about;
