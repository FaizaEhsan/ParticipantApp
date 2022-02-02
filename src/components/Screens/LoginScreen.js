import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, View, Appearance, StatusBar } from 'react-native';
import Login from '../SupportingComponent/Login/Login';
import { userApplicationStatus } from '../../apis/Authenticate';
import { getUserApplicationStatus } from '../../redux/Actions/index';

function LoginScreen () {
  const dispatch = useDispatch();
  const userApplicationStatusData = useSelector((state) => state.getUserApplicationStatus);
  const [NotificationsDataState, setNotificationsDataState] = useState(false);

  useEffect(() => {
    userApplicationStatus();
    async function getUserApplicationStatusFunction () {
      const status = await userApplicationStatus();
      dispatch(getUserApplicationStatus(status));
    }
    getUserApplicationStatusFunction();
  }, []);

  useEffect(() => {
    if (Object.keys(userApplicationStatusData).length > 0) {
      setNotificationsDataState(userApplicationStatusData);
    }
  }, [userApplicationStatusData]);

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
  } else {
    console.log('light')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        animated={true}
        barStyle='dark-content'
        backgroundColor= '#fff'
        />
      <View style={styles.container}>
        {NotificationsDataState &&
          <Login />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});

export default LoginScreen;
