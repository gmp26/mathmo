#!/bin/bash
sed '
/apple-mobile-web-app-status-bar-style/ a\
<link rel="apple-touch-icon" href="http://nrich.maths.org/mobl/mathmo/icon.png" /><link rel="apple-touch-icon-precomposed" href="http://nrich.maths.org/mobl/mathmo/icon.png"/>
' <www/mathmo.html >/tmp/mathmo.html
rm www/mathmo.html
mv /tmp/mathmo.html www/mathmo.html