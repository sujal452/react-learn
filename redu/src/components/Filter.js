import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const Filter = ({ currentFilter, dispatch }) => (
  <div>
    <button
      onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}
      disabled={currentFilter === 'SHOW_ALL'}
    >
      Show All
    </button>
    <button
      onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}
      disabled={currentFilter === 'SHOW_COMPLETED'}
    >
      Show Completed
    </button>
    <button
      onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}
      disabled={currentFilter === 'SHOW_ACTIVE'}
    >
      Show Active
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter
});

export default connect(mapStateToProps)(Filter);
