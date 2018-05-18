# RPI Lego Technic Client
A website that is used for controling a Lego Technic model, it includes the ability to control the bucket, bucket arm, steering and forward/back movement. There is the option for either using the mouse or using the keyboard as a controller as well as including support for a webcam that can be connected to the Raspberry Pi and shown on the website.

# Installation
1. Clone both this repository and the [server repository](https://github.com/nathanryder/RPI-Technic-Server).

2. Compile and run the server jar.
3. (optional) If you want to use a webcam connect the webcam to the Raspberry Pi and run the start.sh file inside the mjpg-streamer folder.
4. In the website, open cgi-bin/controls.js and edit it to correspond with your server details

#### Image of wiring between Technic and RPI
![Wiring](https://i.imgur.com/OWNaTDn.jpg)
