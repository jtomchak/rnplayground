## Up and Running

- `yarn install` // add dependencies
- `yarn start` // get rn metro bundler running

### Android

For Android have react native setup and a simulator with the name 'Pixel_2_API_29' is required. running `emulator -list-avds` will list the avds that are installed.

- `yarn e2e:android-debug` does a couple things.
  1. It will build a .apk file
  2. Then run the tests

### iOS

## Errors

[toBeVisible is _not_ a function](https://github.com/wix/Detox/issues/2390)

- Currently locking at `26.4.2`
  `yarn add -D jest@26.4.2 jest-circus@26.4.2`
