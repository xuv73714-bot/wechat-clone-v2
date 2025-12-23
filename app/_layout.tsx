import { Slot } from "expo-router";
import { ConfigProvider, PortalRef } from "@/component/base/ConfigProvider";
import { RecoilRoot } from "recoil";
import { PusherProvider } from "@/hooks/usePusherProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export { PortalRef };

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <RecoilRoot>
                <PusherProvider>
                    <ConfigProvider>
                        <Slot />
                    </ConfigProvider>
                </PusherProvider>
            </RecoilRoot>
        </GestureHandlerRootView>
    );
}
