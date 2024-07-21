@echo off
Title Android Update

ng build
npx cap sync android
npx cap open android

pause