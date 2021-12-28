#!/bin/bash
node "$(dirname "$0")/main.js" "$input"
   echo "Script: $? - Successfull"
if [ $? != 0 ]; then                   
   echo "success"
fi
