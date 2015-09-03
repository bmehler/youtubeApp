# youtubeApp
A tool for fetching videos of your favourite youtube channel.

"youtubeApp" is a small project to get familiar with AngularJS and the YouTube Data API v3.

Please respect especially the license terms of fancybox.
The fancybox is only free for personal or non-profit website projects.
More detailed informations about licensing you will find on the fancybox website.

[License fancybox](http://fancyapps.com/fancybox/#license)

## Installation
To install the youtubeApp clone the repository and install the dependencies.
```
$ git clone https://github.com/bmehler/youtubeApp.git
$ cd youtubeApp
$ npm install
```

## Preparations
For running the youtubeApp you need an API Key and a Channel ID. Please fill both in:
```
$ cd public/module/video/service
$ (vim | nano) YoutubeDataService.js

/* public/module/video/service/YoutubeDataService.js */
var channelId = '<channelId>';
var apiKey = '<apiKey>';
```
## Quick start
To run the app traditionally enter:
```
$ npm start
```
To run the app with gulp enter:
```
$ gulp start
```

Open your browser and enter:
```
http://localhost:8080
```
For developing purposes I used the gulp tasks lint and build-css. Run each on command line with:
```
$ (gulp lint | gulp build-css)
```
or make a watch on both
```
$ gulp watch
```

## Running tests (Karma/Jasmine)
To run the tests enter:
```
$ (npm test | npm run full-test)
```
First will run the test with *singleRun: true*.
Feel free to change it up to your needs.

### Troubleshooting
If you got an error regarding  **libfontconfig.so** please run:
```
$ (sudo) apt-get install libfontconfig
```
## License
The MIT License

Copyright (c) 2015 Bernhard Mehler &lt;bernhard.mehler@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
