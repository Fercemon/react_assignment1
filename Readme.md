# This app is created with expo cli 
Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility

# expo cli installation and create new project

- npm install -g expo-cli
- expo init AwesomeProject

# to start a development server type the following

- expo start

this will start the Metro Bundler.

# to preview your app you can use one of the following options

- dowload expo app in your phone and scan the QR code you hace on your command line
- download android studio and creat and virtual device. type a in your command line and you will see your app in your virtual device
- you can also type w to preview on the browser

# when using expo we will need some package to code some things as navigation
To be ale to use this package we have to install them with the command line typing: npm install name-of-the-package

And then we have to import the component we want to use typing: import component from 'package';

Remember to import the package on each page you need it.

# About this app

This is an app for workouts.

You can choose between exercises or  plans.

- The exercices are by groups depending the muscle you want to exercise.

  when you click on a muscle group you navigate to a page with a list of exercises for that specific muscle.

- Inside plans there are free plans and premium plans. You only have acces to the free plans if you are not premium

  Inside of each plan you can find the description of the plan, with information about the duration, goal, requirements, etc


# features used on the app

The app use 2 different types of navigation.

We have a tabNavigator to navigate between the main pages (exercices and plans) and stackNavigator to navigate between the pages inside of each main page which we could called subpages.

the stackNavigator for the exercises pages use a transition fromLeft, while plan pages use a transition fromBottom

I decided to use different transition to show that there is different options when using transition.

you can also set different transition for a specific page but I rather to keep consistent navigation transition between subpages.
