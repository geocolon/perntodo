#!/bin/bash
PORT=5000
PID=$(lsof -t -i:$PORT)

if [ "$PID" ]; then
  echo "Killing process $PID using port $PORT"
  kill -9 $PID
else
  echo "Port $PORT is free"
fi