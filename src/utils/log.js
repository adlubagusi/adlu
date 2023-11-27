import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCmNmGk8kf025mGhgBQb2fMYRlLdxwEL4o",
  authDomain: "adlu-profiles.firebaseapp.com",
  projectId: "adlu-profiles",
  storageBucket: "adlu-profiles.appspot.com",
  messagingSenderId: "641543993974",
  appId: "1:641543993974:web:fe799716e690b2e2fb3d57",
  measurementId: "G-RT411JXX4P"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
