
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import './App.css';

const SwipeableRegion = ({ direction, count }) => {
  return (
    <div className={`swipeable-region ${direction}`}>
      <h2>{direction.toUpperCase()}</h2>
      <p>Count: {count}</p>
    </div>
  );
};

SwipeableRegion.propTypes = {
  direction: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const App = () => {
  const [counts, setCounts] = useState({
    up: 0,
    down: 0,
    right: 0,
    left: 0,
  });

  const handleSwipe = (eventData) => {
    const { dir } = eventData;

    switch (dir) {
      case 'Up':
        setCounts(prevCounts => ({ ...prevCounts, up: prevCounts.up + 1 }));
        break;
      case 'Down':
        setCounts(prevCounts => ({ ...prevCounts, down: prevCounts.down + 1 }));
        break;
      case 'Left':
        setCounts(prevCounts => ({ ...prevCounts, left: prevCounts.left + 1 }));
        break;
      case 'Right':
        setCounts(prevCounts => ({ ...prevCounts, right: prevCounts.right + 1 }));
        break;
      default:
        break;
    }
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="App" {...handlers}>
      <div className="swipe-container">
        <SwipeableRegion direction="up" count={counts.up} />
        <SwipeableRegion direction="down" count={counts.down} />
        <SwipeableRegion direction="left" count={counts.left} />
        <SwipeableRegion direction="right" count={counts.right} />
      </div>
    </div>
  );
};

export default App;