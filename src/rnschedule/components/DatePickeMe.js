import React, { useEffect, useState } from 'react';
import { AppContext } from './ContextProvider';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';
import { Calendar } from '../../react-native-calendars/src/index';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { rnSchedule, dateChangeFromMonthly } from '../../redux/Actions/index';

function DatePickeMe () {
  const dispatch = useDispatch();
  const getConciseMonthlyScheduleData = useSelector((state) => state.getConciseMonthlyScheduleData);
  const dateChangeFromWeekly = useSelector((state) => state.dateChangeFromWeekly);
  const [data, setData] = useState();
  const [dateClicked, setDateClicked] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());

  // const A = { key: 'A', color: 'red' };
  // const D = { key: 'courtdate', color: 'blue' };
  // const C = { key: 'C', color: 'green' };
  // const I = { key: 'I', color: 'orange' };

  console.log('currentDate in monthly', currentDate);

  const O = { key: 'O', color: '#2c8ee5' };
  const V = { key: 'V', color: '#f29c1b' };
  const B = { key: 'B', color: '#fcea49' };
  const C = { key: 'C', color: '#72cf84' };
  const L = { key: 'L', color: '#7879f1' };

  useEffect(() => {
    if (Object.keys(getConciseMonthlyScheduleData).length > 0) {
      const newData = getConciseMonthlyScheduleData.map(res => {
        return {
          day: res.day,
          type: res.type
        };
      });
      setData([...newData]);
    }
  }, [getConciseMonthlyScheduleData]);

  useEffect(() => {
    console.log('dateChangeFromWeekly', dateChangeFromWeekly);
    setCurrentDate(dateChangeFromWeekly);
  }, [dateChangeFromWeekly]);

  const aaa = {};
  const setDataNew = getConciseMonthlyScheduleData.map(res => {
    const abc = res.type.split('');
    let i;
    const toUse = [];
    for (i = 0; i < abc.length; i++) {
      toUse.push(eval(abc[i]));
    }
    const arr = [moment(res.day, 'DD.MM.YYYY').format('YYYY-MM-DD')];
    aaa[arr] = { dots: toUse };
  });

  return (
    <AppContext.Consumer>
      {(context) =>
        <Collapsible collapsed={!context.isDatePickerVisible}>
          <Calendar
            // selectedDayBackgroundColor='de3326'
            onDayPress={({ year, month, day }) => {
              context.setDate(new Date(year, month - 1, day));
              dispatch(dateChangeFromMonthly(new Date(year, month - 1, day)));
              setDateClicked(dateClicked + 1);
              console.log('dateClicked', dateClicked);
              // dispatch(rnSchedule('showWeekly'));
              dispatch(rnSchedule(dateClicked));
            }}
            onDayLongPress={(day) => console.log('selected day', day)}
            monthFormat='MMMM yyyy'
            hideExtraDays
            firstDay={1}
            markingType='multi-dot'
            markedDates={aaa}
            enableSwipeMonths
          />
          <View style={{ backgroundColor: 'grey', width: '100%', height: 1 }} />
        </Collapsible>}
    </AppContext.Consumer>
  );
}
export default DatePickeMe;
