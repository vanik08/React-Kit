import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-daterange-picker';
import dateRangePickerStyles from 'styles/lib/DateRangePickerStyles';
import { Button, Input, Row, Col } from 'react-bootstrap';

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

const dateRanges = [
  // {
  //   state: 'enquire',
  //   range: moment.range(
  //     moment().add(2, 'weeks').subtract(5, 'days'),
  //     moment().add(2, 'weeks').add(6, 'days')
  //   ),
  // },
  // {
  //   state: 'unavailable',
  //   range: moment.range(
  //     moment().add(3, 'weeks'),
  //     moment().add(3, 'weeks').add(5, 'days')
  //   ),
  // },
];


class Datepicker extends React.Component {
  constructor() {
    super();
    this.onSelectDates = this.onSelectDates.bind(this);
    this.state = {
      value: '',
      states: ''
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
    this.setState({
      value: range,
      states: states
    });
  }

  render() {
    return (
      <Row>
        <Col md={4}>
          <label>From</label>
          <Input type="text" placeholder="From"
                 value={this.getFormattedDate(this.state.value.start)} />
          <label>To</label>
          <Input type="text" placeholder="To"
                 value={this.getFormattedDate(this.state.value.end)} />
          <DateRangePicker selectionType="range"
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
