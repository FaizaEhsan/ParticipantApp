import React from 'react';
import { View } from 'react-native';
import ApptView from './ApptView';
import ApptViewColor from './ApptViewColor';

const RowView = ({ row, hour_size, onEventPress }) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: '98%',
          position: 'absolute',
          marginTop: row.hrsBefore * hour_size,
          // flexDirection: 'row',
          // justifyContent: 'space-around'
        }}
      >
        {row.rowAppts.map((appt, i) => <ApptViewColor key={i} topTime={row.start} appt={appt} hour_size={hour_size} onEventPress={onEventPress} />)}
      </View>
      <View
        style={{
          width: '97%',
          position: 'absolute',
          left: 5,
          marginTop: row.hrsBefore * hour_size,
          // flexDirection: 'row',
          // justifyContent: 'space-around'
        }}
      >
        {row.rowAppts.map((appt, i) => <ApptView key={i} topTime={row.start} appt={appt} hour_size={hour_size} onEventPress={onEventPress} />)}
      </View>
    </View>
  );
};

export default RowView;
