import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DashBoard, FilteredItem} from '@screens';
import {Text, TouchableOpacity, View} from 'react-native';
import {Gap} from 'components';
import {dashBoardNavProp, sideNavProp} from '@constant/type/routerType';

export type dashBoardStackParamList = {
  dashBoard: undefined;
  filtered: {categorie: string};
};

const Drawer = createDrawerNavigator<dashBoardStackParamList>();

const categories = ['Semua', 'Jajanan', 'Sembako', 'Rokok'];

const CustomDrawerContent = ({navigation}: {navigation: sideNavProp}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const moveScreenHandler = (idx: number, cat: string) => {
    setActiveIdx(idx);
    if (idx == 0) {
      navigation.jumpTo('dashBoard');
    } else {
      navigation.jumpTo('filtered', {categorie: cat});
    }
  };

  return (
    <View>
      <Gap height={30} />
      {categories.map((cat, idx) => {
        const active = idx === activeIdx;
        return (
          <TouchableOpacity
            onPress={() => moveScreenHandler(idx, cat)}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: active ? 'lightblue' : 'transparent',
            }}
            key={cat}>
            <Text style={{fontSize: 16}}>{cat}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const sideBar = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="dashBoard" component={DashBoard} />
      <Drawer.Screen name="filtered" component={FilteredItem} />
    </Drawer.Navigator>
  );
};

export default sideBar;
