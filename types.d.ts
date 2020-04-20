import {Component, ReactElement} from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledRailBackgroundColor?: string;
  disabledThumbIconBackgroundColor?: string;
  disabledThumbIconBorderColor?: string;
  enableRightToLeftSwipe?: boolean;
  height?: number | string;
  onSwipeFail?: () => void;
  onSwipeStart?: () => void;
  onSwipeSuccess?: () => void;
  railBackgroundColor?: string | any;
  railBorderColor?: string;
  railFillBackgroundColor?: string;
  railFillBorderColor?: string;
  resetAfterSuccessAnimDuration?: number;
  screenReaderEnabled?: boolean;
  shouldResetAfterSuccess?: boolean;
  swipeSuccessThreshold?: number; // Ex: 70. Swipping 70% will be considered as successful swipe
  thumbIconBackgroundColor?: string | any;
  thumbIconBorderColor?: string | any;
  thumbIconComponent?: () => ReactElement;
  thumbIconImageSource?: string | number;
  thumbIconStyles?: StyleProp<ViewStyle>;
  title?: string;
  titleColor?: string | any;
  titleFontSize?: number;
  titleStyles?: StyleProp<TextStyle>;
  width?: string | number;
}

interface State {
  layoutWidth: number;
  screenReaderEnabled: boolean;
}

export default class RNSwipeButton extends Component<Props, State> {}

export {Props};
