## Notes

This Boiler Plate (referenced throughout the app as BP | Bp | bp) is running the following stack:
-	Docker
-   Webpack 2 
-   ES2015 (ES6)
-   AngularJS  
-   Angular Material

## Docker

-	Install Docker to your machine
-   Clone repo to your file system
-   cd to cloned directory
-   docker build -t boilerplate .
-   docker run -d -p 8080:8080 --name boilerPlateContainer boilerplate
-   Change hosts file (Linux): sudo vim /etc/hosts > Press Insert > Add Docker's hosting machine <IP Address> boilerplate.home (eg: 192.168.3.100 boilerplate.home)> Esc > :wq
-   Change hosts file (Windows): C:\Windows\System32\Drivers\etc\hosts > Add Docker's hosting machine <IP Address> boilerplate.home (eg: 192.168.3.100 boilerplate.home) > Save as Administrator
-   In browser key in the URL as http://BoilerPlate.home:8080


## Installation

Follow these steps to install this app:
-   Clone this repo from GIT
-   cd to cloned directory
-   npm install


## Launch

To launch the app in DevServer mode key in this command 
-	npm run dev
-	In browser key in the URL which the above command generated

To launch the host the app in Production mode follow this process
-   npm run prod 
-   The above command will package and output files to dist folder
-	npm install http-server -g
-	http-server /path/to/dist
-	In browser key in the URL which the above command generated


## License

MIT License

Copyright (c) 2017 SUMEET SETHI [<sumeetsethi.asm@gmail.com>]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.