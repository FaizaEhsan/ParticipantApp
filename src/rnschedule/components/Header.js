import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarStrip from '../../react-native-calendar-strip/index';
import { useSelector, useDispatch } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppContext } from './ContextProvider';
import tinycolor from 'tinycolor2';
import styles from './headerStyles';
import moment from 'moment';
import { Divider } from 'react-native-paper';
import { argonTheme } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dateChangeFromWeekly } from '../../redux/Actions/index';

const Header = ({ header_color, left_icon, accent, status_bar }) => {
  const dispatch = useDispatch();
  const color1 = tinycolor(header_color);
  const text_color = color1.isDark() ? '#fff' : '#000';
  const accent_color = tinycolor(accent);
  const accent_text_color = accent_color.isDark() ? '#fff' : '#000';
  const marginTop = status_bar && Platform.OS == 'ios' ? 0 : 0;
  const icon = color1.isDark()
    ? require('../icons/calendar_today_white.png')
    : require('../icons/calendar_today_black.png');
  const arrow_down = color1.isDark()
    ? require('../icons/arrow_drop_down_white.png')
    : require('../icons/arrow_drop_down_black.png');

  const rnSchedule = useSelector((state) => state.rnSchedule);
  const dateChangeFromMonthlyData = useSelector((state) => state.dateChangeFromMonthly);
  const [rnScheduleRedux, setRnScheduleRedux] = useState('showWeekly');
  const [openWeekly, setOpenWeekly] = useState(true);
  const getConciseMonthlyScheduleData = useSelector((state) => state.getConciseMonthlyScheduleData);
  const [data, setData] = useState();
  const [token, setToken] = useState();
  const [dateClicked, setDateClicked] = useState();
  const [currentDate, setCurrentDate] = useState(moment());

  console.log('currentDate', currentDate);

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
    if (rnSchedule > 0) {
      setOpenWeekly(!openWeekly);
    }
  }, [rnSchedule]);

  useEffect(() => {
    if (dateChangeFromMonthlyData > 0) {
      console.log('date in header', dateChangeFromMonthlyData);
      setCurrentDate(dateChangeFromMonthlyData);
    }
  }, [dateChangeFromMonthlyData]);

  useEffect(() => {
  }, [currentDate]);

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

  // console.log('aaa', aaa);

  let markedDatesArray = [];
  markedDatesArray = [
    {
      date: new Date('2021-09-23T06:30:00.000Z'),
      dots: [
        {
          color: '#2c8ee5'
        },
        {
          color: argonTheme.COLORS.BUTTONFILLED
        },
        {
          color: argonTheme.COLORS.TEXT
        }
      ]
    }
  ];

  useEffect(() => {
    month();
    const interval = setInterval(() => {
      month();
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const month = async () => {
    try {
      const valueString = await AsyncStorage.getItem('month');
      const value = JSON.parse(valueString);
      setToken(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        const calendarOpen = () => {
          setOpenWeekly(!openWeekly);
          // setRnScheduleRedux(!rnScheduleRedux);
          console.log('openWeekly inside touchable function', openWeekly);
          context.toggleDatePicker();
        };
        return (
          <View style={{ marginTop: Platform.OS === 'ios' ? 0 : '0%' }}>
            <View style={[styles.container, { backgroundColor: '#fff', marginTop: marginTop }]}>
              <View style={styles.text_row}>
                <TouchableOpacity style={styles.center} onPress={() => calendarOpen()}>
                  <Text style={[styles.month, { color: text_color }]}>{token}</Text>
                  <Entypo
                    name='chevron-small-down'
                    size={25}
                    color={argonTheme.COLORS.TEXT}
                    style={{ alignSelf: 'center' }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {openWeekly &&
              <CalendarStrip
                // scrollable
                  // iconLeft={null}
                // calendarHeaderContainerStyle={{ margin: 0 }}
                  // iconRight={null}
                style={{ height: 130, paddingTop: 0, paddingBottom: 0 }}
                showMonth={false}
                calendarColor='white'
                highlightDateNameStyle={{ color: argonTheme.COLORS.TEXT }}
                highlightDateNumberStyle={{
                  color: '#fff',
                  fontSize: 11
                }}
                selectedDate={currentDate}
                onDateSelected={(day) => {
                  // console.log('datechangefromweekly', new Date(day));
                  context.setDate(new Date(day));
                  dispatch(dateChangeFromWeekly(new Date(day)));
                }}
                // calendarHeaderStyle={{ color: 'black' }}
                // dayContainerStyle={{marginBottom: 10}}
                innerStyle={{ flex: 1, justifyContent: 'space-between' }}
                dateNumberStyle={{ color: argonTheme.COLORS.TEXT, fontSize: 11, marginTop: 0 }}
                dateNameStyle={{ color: argonTheme.COLORS.TEXT, fontSize: 11, marginBottom: 0 }}
                iconContainer={{ flex: 0 }}
                markedDates={markedDatesArray}
                markedDatesStyle={{ margin: 1 }}
                daySelectionAnimation={{
                  type: 'background',
                  highlightColor: argonTheme.COLORS.BUTTONFILLED
                }}
              />}
            {openWeekly === true &&
              <Divider style={{ height: 2 }} />}
          </View>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Header;
