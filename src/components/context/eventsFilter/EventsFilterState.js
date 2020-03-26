import React, { useReducer } from 'react';
import eventsFilterReducer from '../eventsFilter/eventsFilterReducer';
import eventsFilterContext from '../eventsFilter/eventsFilterContext';

const EventsFilterState = props => {
  const initialState = {
    categories: ['Food', 'Health', 'Film', 'Self-help'],
    locations: ['Chennai', 'Kolkata', 'Delhi', 'Mumbai'],
    filtered_category: [],
    filtered_location: [],
    filtered_state_date: '',
    filtered_end_date: '',
    isMember: true
  };

  const [state] = useReducer(eventsFilterReducer, initialState);

  return (
    <div>
      <eventsFilterContext.Provider
        value={{
          categories: state.categories,
          locations: state.locations,
          isMember: state.isMember
        }}
      >
        {props.children}
      </eventsFilterContext.Provider>
    </div>
  );
};

export default EventsFilterState;
