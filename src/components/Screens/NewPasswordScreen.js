import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewPassword from '../SupportingComponent/NewPassword/NewPassword';
import { useDispatch, useSelector } from 'react-redux';
import { getResources } from '../../apis/ResourcesApi';
import { getResourcesData } from '../../redux/Actions/index';

function NewPasswordScreen () {
//   const dispatch = useDispatch();
//   const ResourcesData = useSelector((state) => state.getResourcesData);
//   const [resourcesDataState, setResourcesDataState] = useState(false);

  //   useEffect(() => {
  //     getResources();
  //     async function getResourcesFunction () {
  //       const status = await getResources();
  //       dispatch(getResourcesData(status));
  //       console.log('status----------', status);
  //     }
  //     getResourcesFunction();
  //   }, []);

  //   useEffect(() => {
  //     if (Object.keys(ResourcesData).length > 0) {
  //       setResourcesDataState(ResourcesData);
  //     }
  //   }, [ResourcesData]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* {resourcesDataState &&
        <Resources value={resourcesDataState} />} */}
      <NewPassword />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default NewPasswordScreen;
