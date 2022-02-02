import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tinycolor from 'tinycolor2';
import Colors from '../constants/colors';
import { hrsToStart } from '../services/hrsToPx';

const ApptView = ({ topTime, appt, hour_size, onEventPress }) => {
  const color = tinycolor(appt.color).isValid() ? tinycolor(appt.color).toHexString() : Colors.red;
  const margin = hrsToStart(appt.start, topTime) * hour_size;

  return (
    <View
      style={{
        // flex: 1,
        width: '100%',
        marginTop: margin,
        height: appt.height,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 5,
        padding: 2,
        overflow: 'hidden'
      }}
    >
      <TouchableOpacity
        onPress={() => onEventPress(appt)}
        style={{ marginLeft: '5%', padding: 0, flex: 1, flexDirection: 'row' }}
      >
        <Text style={[{ fontFamily: 'Inter-SemiBold' }, tinycolor(color).isDark() && { color: 'black' }]}>
          {appt.title}
        </Text>
        {appt.subtitle
          ? <Text style={[{ fontWeight: '200', fontSize: 10, marginLeft: '2%', marginTop: '1.5%' }, { color: 'grey' }]}>
            {appt.subtitle}
          </Text>
          : null}
      </TouchableOpacity>
    </View>
  );
};

export default ApptView;
