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

export const MediumHeader = ({
  children,
  style,
  allowFontScaling,
}: ParentComponent & { allowFontScaling?: boolean }) => (
  <Text
    style={{
      fontWeight: "900",
      fontSize: 20,
      color: theme.darkText,
      marginBottom: 12,
      ...style,
    }}
    textBreakStrategy={"simple"}
    allowFontScaling={allowFontScaling}
  >
    {children}
  </Text>
);

export const SubHeader = ({ children, style }: ParentComponent) => (
  <Text
    style={{
      fontWeight: "700",
      fontSize: 18,
      color: theme.darkText,
      marginBottom: 12,
      ...style,
    }}
  >
    {children}
  </Text>
);

export const Paragraph = ({ children, style }: ParentComponent) => (
  <Text
    style={{
      color: theme.lightText,
      fontWeight: "400",
      fontSize: 16,
      ...style,
    }}
  >
    {children}
  </Text>
);

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
};

export const Badge = ({
  text,
  backgroundColor,
  featherIconName,
  style,
}: {
  text: string;
  backgroundColor?: string;
  featherIconName: string;
  style?: any;
}) => (
  <View
    style={{
      backgroundColor: backgroundColor || theme.lightBlue,
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 12,
      paddingTop: 12,
      borderRadius: 8,
      justifyContent: "space-between",
      flex: 1,
      flexDirection: "row",
      ...style,
    }}
  >
    <Text
      style={{
        fontWeight: "700",
        color: theme.lightText,
        fontSize: 14,
      }}
      maxFontSizeMultiplier={1.2}
    >
      {text}
    </Text>
    <Feather name={featherIconName} size={16} color={theme.lightText} />
  </View>
);

export const HintHeader = ({ children, style }: ParentComponent) => (
  <Text
    style={{
      fontWeight: "700",
      fontSize: 16,
      color: theme.veryLightText,
      marginBottom: 12,
      ...style,
    }}
  >
    {children}
  </Text>
);

export const GhostButton = ({
  title,
  onPress,
  borderColor,
  textColor,
  width,
  height,
  disabled,
  flex,
  fontSize,
  style,
}: {
  title: string;
  onPress: () => void;
  borderColor?: string;
  textColor?: string;
  width?: number | string;
  height?: number;
  disabled?: boolean;
  flex?: number;
  fontSize?: number;
  style?: any;
}) => (
  <TouchableOpacity
    style={{
      padding: 12,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: borderColor || theme.gray,
      borderWidth: 1,
      borderBottomWidth: 2,
      maxHeight: 48,
      width,
      height,
      flex,
      ...style,
    }}
    disabled={disabled}
    onPress={onPress}
  >
    <Text
      style={{
        textAlign: "center",
        color: textColor || theme.darkText,
        fontWeight: "700",
        fontSize: fontSize || 16,
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export const Header = ({
  children,
  style,
  allowFontScaling,
}: ParentComponent & { allowFontScaling?: boolean }) => (
  <Text
    style={{
      fontWeight: "900",
      fontSize: 48,
      color: theme.darkText,
      marginBottom: 12,
      ...style,
    }}
    textBreakStrategy={"simple"}
    allowFontScaling={allowFontScaling}
    maxFontSizeMultiplier={1}
  >
    {children}
  </Text>
);

Header.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

export const GhostButtonWithGuts = ({
  onPress,
  borderColor,
  disabled,
  flex,
  children,
  style,
}: {
  onPress: () => void;
  borderColor?: string;
  disabled?: boolean;
  flex?: number;
  children: any;
  style?: any;
}) => (
  <TouchableOpacity
    style={{
      padding: 12,
      borderRadius: 10,
      borderColor: borderColor || theme.lightGray,
      borderWidth: 1,
      borderBottomWidth: 2,
      flex,
      ...style,
    }}
    disabled={disabled}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export const Label = ({ children, style }: { children: any; style?: any }) => (
  <Text
    style={{
      fontWeight: "700",
      fontSize: 18,
      color: theme.veryLightText,
      marginBottom: 12,
      ...style,
    }}
  >
    {children}
  </Text>
);

export const Row = ({ children, style }: { children: any; style?: any }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      ...style,
    }}
  >
    {children}
  </View>
);

Row.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

export const Container = ({ children, style }: ParentComponent) => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 50,
      ...style,
    }}
  >
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any,
};

export const RoundedSelectorButton = ({
  title,
  selected = false,
  onPress,
}: {
  title: string;
  selected?: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: selected ? theme.blue : "white",
      borderColor: selected ? theme.darkBlue : theme.lightGray,
      borderBottomWidth: 2,
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 12,
      borderRadius: 8,
      borderWidth: 1,
      marginBottom: 4,
      marginTop: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          color: selected ? "white" : theme.darkText,
          marginLeft: 12,
        }}
      >
        {title}
      </Text>
    </View>

    {selected && <Feather name={"check"} size={16} color={"white"} />}
  </TouchableOpacity>
);

export const B = ({ children, style }: { children: any; style?: any }) => (
  <Text style={{ fontWeight: "bold", ...style }}>{children}</Text>
);

export const CapsLabel = ({ children, style }) => (
  <Text
    style={{
      fontSize: 10,
      fontWeight: "700",
      color: theme.lightText,
      letterSpacing: 1,
      ...style,
    }}
  >
    {children}
  </Text>
);

