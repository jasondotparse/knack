import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import theme from "./theme";
import { Feather } from "@expo/vector-icons";
import { find } from "lodash";

export interface ParentComponent {
  children: any;
  style?: object;
}

export interface Component {
  style?: object;
}

export const ActionButton = ({
  title,
  onPress,
  fillColor,
  textColor,
  width,
  height,
  disabled,
  flex,
  style,
}: {
  title: string;
  onPress: () => void;
  fillColor?: string;
  textColor?: string;
  width?: number | string;
  height?: number;
  disabled?: boolean;
  flex?: number;
  style?: any;
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: fillColor,
      padding: 12,
      borderRadius: 10,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: 48,
      borderColor: theme.darkBlue,
      borderWidth: 1,
      borderBottomWidth: 2,
      width,
      height,
      flex,
      opacity: disabled ? 0.3 : 1,
      ...style,
    }}
    disabled={disabled}
    onPress={onPress}
  >
    <Text
      style={{
        textAlign: "center",
        color: textColor,
        fontWeight: "700",
        fontSize: 16,
      }}
      maxFontSizeMultiplier={1.2}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

ActionButton.defaultProps = {
  fillColor: theme.blue,
  textColor: "white",
  width: 120,
};
