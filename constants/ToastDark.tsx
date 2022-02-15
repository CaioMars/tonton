import { BaseToast, ErrorToast, ToastConfig } from "react-native-toast-message";
import Colors from "./Colors";

const ToastDark: ToastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: Colors.dark.toastBackground,
        borderLeftWidth: 0,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: Colors.dark.toastText,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default ToastDark;
