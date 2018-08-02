import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme = {}) {
	const appStyle = { ...defaultStyle, ...theme };
	return StyleSheet.create({
		container: {
			paddingLeft: appStyle.pdLeft ? appStyle.pdLeft : 5,
			paddingRight: appStyle.pdRight ? appStyle.pdRight : 5,
      backgroundColor: appStyle.calendarBackground,
      flex: 1,
		},
		monthView: {
			backgroundColor: appStyle.calendarBackground,
		},
		week: {
			marginTop: appStyle.appMarginTop ? appStyle.appMarginTop : 7,
			marginBottom: appStyle.appMarginBottom ? appStyle.appMarginBottom : 7,
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
		dayContainer: {
			width: appStyle.dayContain ? appStyle.dayContain : 32,
		},
		...(theme[STYLESHEET_ID] || {}),
	});
}
