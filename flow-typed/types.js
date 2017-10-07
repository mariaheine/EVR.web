// @flow

// declaring global variable and how you gonna interact with it
declare var module: {
  // it's gonna be an object
  hot: {
    // it will contain object hot
    // and the only method we will acknowledge on it will be accept
    // it will be taking in a string
    // and a function that wont be returning anything

    // :void and that the whole function itself also returns nothing
    accept(path: string, callback: () => void): void
  }
};
