import '../Topbar.css';

const Topbar = ({score, timeleft}) => {
  
 return (
    <div className="bar-container">
      <h1 className="score">{`Score: ${score}`}</h1>
        <h1 className='time'>{`Time Left: ${timeleft}`}</h1>
    </div>
  );
}

export default Topbar;