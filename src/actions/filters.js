// Filter actions
// SET_TEXT_FILTER
export const setText = (text = '') => ({
    text,
    type: 'SET_TEXT'
});
  // SORT_BY_DATE
export const setSortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
export const setSortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
export const setStartDate = (startDate) => ({
    startDate,
    type: 'SET_START_DATE'
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
    endDate,
    type: 'SET_END_DATE'
});
