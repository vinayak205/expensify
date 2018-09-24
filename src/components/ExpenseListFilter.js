import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'; 
import { setText, setSortByAmount, setSortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  };

  render() {
    return (
      <div>
        <input value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setText(e.target.value));
        }} />
        <select value={this.props.filters.sortBy}
                onChange={(e) => {
          const selectedOption = e.target.value;
          if (selectedOption === 'amount') {
            this.props.dispatch(setSortByAmount());
          } else {
            this.props.dispatch(setSortByDate());
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
