import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const Instructions = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Steps to create this project</Text>
      <Text style={styles.header}>Step 1: Create NX Workspace</Text>
      <Text style={styles.command}>
        npx create-nx-workspace nx-demo-repo --preset=react-native
        --appName=mobile
      </Text>
      <Text style={styles.note}>Note: Say yes when prompted</Text>

      <Text style={styles.header}>Step 2: Install Expo</Text>
      <Text style={styles.command}>npm i --save-dev @nx/expo</Text>

      <Text style={styles.header}>Step 3: Create Expo-web Project</Text>
      <Text style={styles.command}>nx g @nx/expo:app my-app</Text>
      <Text style={styles.note}>Note: Select Derived when prompted</Text>

      <Text style={styles.header}>
        Step 4: Paste the following scripts in package.json's scripts and update
        the "project-name"
      </Text>
      <Text style={styles.codeBlock}>
        "scripts": {'{\n'}
        {'  '} "watchManCacheClean": "watchman watch-del-all",{'\n'}
        {'  '} "metroCacheClean": " rm -rf $TMPDIR/metro-bundler-cache-* && npm
        cache clean --force",{'\n'}
        {'  '} "deleteNodeModules": "rm -rf node_modules && rm -rf
        package-lock.json && rm -rf apps/webpack-test/ios/Pods && rm -rf
        apps/webpack-test/ios/Podfile.lock",{'\n'}
        {'  '} "deleteAndInstall": "yarn deleteNodeModules && yarn
        watchManCacheClean && yarn npmInstall",{'\n'}
        {'  '} "npmInstall": "npm i --legacy-peer-deps && rm -rf /tmp/metro-* &&
        yarn launchWeb",{'\n'}
        {'  '} "web": "npx nx reset && npx nx start package-name",{'\n'}
        {'  '} "launchWeb": "yarn launchChromeWithDev && yarn web",{'\n'}
        {'  '} "launchChromeWithDev": "open -n -a /Applications/Google\\
        Chrome.app/Contents/MacOS/Google\\ Chrome --args
        --user-data-dir='/tmp/chrome_dev_test' --disable-web-security
        --auto-open-devtools-for-tabs",{'\n'}
        {'  '} "webBuild": "npx nx export package-name --platform=web"{'\n'}
        {'}'}
      </Text>

      <Text style={styles.header}>Step 5: Run Web</Text>
      <Text style={styles.command}>yarn launchWeb</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  command: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 5,
    fontFamily: 'monospace',
  },
  codeBlock: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 5,
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
  note: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});

export default Instructions;
