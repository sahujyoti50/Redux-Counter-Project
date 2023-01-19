import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };
  const incrementClickHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementClickHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const incrementBy5ClickHandler = () => {
    dispatch({ type: 'incrementBy5', amount: 5 })
    //adding extra property to action is known as action payload.
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className='buttons'>
        <button onClick={incrementClickHandler}>+</button>
        <button onClick={decrementClickHandler}>-</button>
        {/* action */}
        <button onClick={incrementBy5ClickHandler}>+5</button>
      </div>
      <button className="toggle" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
