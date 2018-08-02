import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width:appStyle.wbase ? appStyle.wbase : 32,
      height: appStyle.hbase ? appStyle.hbase : 32,
      alignItems: 'center',
      padding: 2,  
    },
    text: {
      marginTop:appStyle.mgtop ? appStyle.mgtop : 1,
      marginBottom: 1,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight:appStyle.ttfontWeight  ?appStyle.ttfontWeight: '300',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 4,
      marginBottom: Platform.OS === 'android' ? 4 : 4,
    },
    selected: {
      borderColor: appStyle.selectedDayBackgroundColor,
      borderRadius:appStyle.wBDradious ? appStyle.wBDradious : 16,
      borderWidth: 1,
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
      fontWeight: '900',
    },
    disabledText: {
      color: appStyle.textDisabledColor,
      textDecorationLine:'underline line-through',
    },
    dot: {
      width:appStyle.showdot ?  4 : null,
      height: appStyle.showdot ?  4 : null,
      marginTop: appStyle.showdot ?  1 : null,
      borderRadius: appStyle.showdot ?  2 : null,
      opacity: appStyle.showdot ?  0 : null,
      marginBottom: 4,
      
    },
    visibleDot: {
      // opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
