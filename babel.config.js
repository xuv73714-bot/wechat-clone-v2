module.exports = function (api) {
  const isWeb = api.caller(
    (caller) =>
      caller && (caller.name === "babel-loader" || caller.platform === "web")
  );

  const alias = {
    "@/icons": "./assets/icon",
    "@/pages": "./app/pages",
    "@/hooks": "./app/hooks",
    "@/utils": "./app/utils",
    "@/const": "./app/const",
    "@/component": "./app/component",
    "@/theme": "./theme",
    "@/assets": "./assets",
    "@/mocks": "./mocks",
    "@/config": "./app/config",
    "@/store": "./app/store",
    "app/store": "./app/store",
    app: "./app",
    utils: "./utils.ts",
    theme: "./theme",
    "@": "./",
  };

  if (isWeb) {
    alias["react-native-webrtc"] = "./mocks/native-mock.js";
    alias["react-native-tcp-socket"] = "./mocks/native-mock.js";
    alias["@react-native-google-signin/google-signin"] = "./mocks/native-mock.js";
  }

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
          alias: alias,
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
