import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import dateRangePickerStyles from 'styles/lib/DateRangePickerStyles';
import { Button, Input, Row, Col } from 'react-bootstrap';

import WeekdaySelector from 'components/WeekdaySelector';

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable',
  },
};

const dateRanges = [];


class Datepicker extends React.Component {
  constructor() {
    super();
    this.onSelectDates = this.onSelectDates.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: '',
      states: '',
      weekdays: []
    };
  }

  getFormattedDate(date) {
    if (date == undefined)
      return '';

    let tempDate =  new Date(date);
    let month = tempDate.getMonth()+1;
    let day = tempDate.getDate();
    let year = tempDate.getFullYear();
    return `${month}/${day}/${year}`;
  }

  onSelectDates(range, states) {
    dateRanges.push({state: 'enquire', range: range});
    dateRanges.sort();
    this.setState({
      value: range,
      states: states
    });
  }

 onClick() {
   console.log(this.state.weekdays);
 }

  render() {
    return (
      <Row>
        <Col md={8}>
          <label>From</label>
          <Input
            type="text"
            placeholder="From"
            value={this.getFormattedDate(this.state.value.start)} />
          <label>To</label>
          <Input
            type="text"
            placeholder="To"
            value={this.getFormattedDate(this.state.value.end)} />

          <WeekdaySelector selectedWeekdays={this.state.weekdays} />

          <Button bsStyle={'success'} onClick={this.onClick}>
            Set Dates
          </Button>
          <DateRangePicker
            selectionType="range"
            numberOfCalendars={1}
            stateDefinitions={stateDefinitions}
            defaultState="available"
            dateStates={dateRanges}
            value={this.state.value}
            onSelect={this.onSelectDates} />
        </Col>
      </Row>
    );
  }
}

export default Datepicker;
