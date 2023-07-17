import { StyleSheet } from 'react-native';
import colors from '../utils/Colors.js';

const styles = StyleSheet.create({
  /**
   * Style for the entire bottom navigation container
   */
  bottomContainer: {
    backgroundColor: colors.bottomTabBackground,
  },
  /**
   * Style for focused icons in the bottom navigation bar
   */
  focusedIconStyle: {
    fontSize: 24,
    color: colors.spotifyWhite
  },
  /**
   * Style for unfocused icons in the bottom navigation bar
   */
  unfocusedIconStyle: {
    fontSize: 21,
    color: colors.spotifyWhite
  }
});

export default styles;