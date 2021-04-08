# Sweet Tangent

## Client App (mobile, tablet and web)

### Preregquisite:

1. If you have never code with Node.js and React, you should do some tutorials first. There are plenty of free tutorials online. My recommendations:
   - React Tutorial for Beginners: https://youtu.be/Ke90Tje7VS0
   - React Native Tutorial for Beginners: https://youtu.be/0-S5a0eXPoc

### Setup:

1. download & install Node.js, https://nodejs.org/en/download/
2. download & install Visual Studio Code (or an editor of your choice), https://code.visualstudio.com/Download
3. install Git, https://github.com/git-guides/install-git -- NOTE: the GitHub Desktop does not work within VS Code. Instead, I prefer to install Git on Windows (or your platform) and then install the GitHub Pull Requests and Issues extension for VS Code, https://code.visualstudio.com/docs/editor/github. Click on the Source Control icon and follow directions to login to GitHub, etc.
4. create a project folder, cd into it and get the code: $ git clone https://github.com/ntad2/sweet-tangent.git
   NOTE: there will be multiple folders/projects.

### The Client App:

1. $ cd client
2. install dependencies: $ npm install
3. compile & run: $ npm start
   - the Metro Bundler will open up in your web browser
   - click on the "Run in web browser" link, wait for it, the web app will appear
   - for Android and iOS, see below
4. use Ctrl-C to stop

### Running on iOS and Android

See the setup steps in the tutorial, https://youtu.be/0-S5a0eXPoc. Definitely install Expo Client on your iOS and Android phone and/or tablet (see Running on a physical device). Then you'll be able to play with any app deployed with Expo.

- 0:14:38​ Running on an iOS simulator
- 0:18:02​ Running on an Android emulator
- 0:26:48​ Running on a physical device

### Debugging

See the steps in the tutorial, https://youtu.be/0-S5a0eXPoc

- 0:29:16​ Debugging with Chrome
- 0:34:27​ Debugging in VSCode

### Development

DO NOT use HTML tags and CSS styles. Use react-native-paper components as much as possible because they will compile into native components for mobile platforms as well as html for web browsers. https://callstack.github.io/react-native-paper/index.html

Secondly, use React Native components, https://reactnative.dev/docs/getting-started and if needed, code separately for web and use material-ui components as much as possible, https://material-ui.com/.

React Native has its own CSS syntax/stlyes so us that instead of regular CSS.

Our main technologies:

- Node.js and ReactJS
- React Native (for mobile app development) and Expo (dev env for React Native)
- react-native-paper (Cross-platform Material Design for React Native)
- react-native-web (build React Native components for the web)
- @expo/match-media react-responsive (Media Queries / Responsive Design)
