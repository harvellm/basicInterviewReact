# Instructions:

Please clone (or download as a zip) this repository.  It is assumed that, since you are applying for a position which works with React applications, you will have Node (and, obviously, npm) installed. If this is not the case on the machine you are working on now, please let the interviewer know and this can be done quite quickly. This interview will need to be completed in view of the interviewer or interview team so the ability to share your screen is imperative.

This portion of the interview breaks down into two parts: one is a mandatory function hydration and another, secondary part, presents you with the opportunity to choose any/all of a set of tasks. Keep in mind that you will have approximately 40 - 45 minutes (there is no timer but we do want to allow some time for discussion afterward) to complete these tasks.  

Within the App.js file you will find a simple test harness.  A number can be typed into the input box and it will be evaluated in the onBlur event.  You can just run the app with npm start once you have installed the necessary npm modules as normal.

The mandatory step which must be completed first is the following:

- Inside the number-utils.js module you will find an empty function with instructions, complete this function.  You may use the provided form (mentioned above) to test your work or you can write some other code to do it. For the purposes of timeliness in testing this, the following numbers are prime: 2,3,5,7,11,13,17,19,23.  Therefore, the following numbers in the same range are *not* prime: 4,6,8,9,10,12,14,15,16,18,20,21,22,24.

Once you have completed this mandatory step, here are several options to modify the application. Please choose among them for as many as you feel you can code in the allotted timeframe:

- The testing for primeness can carry with it a large computational burden for larger numbers even with careful algorithmic optimization. Please implement the memoization pattern (caching) in the algorithm so that the computation will not be required in the case that the numbers primeness has previously been determined.  For this consider implementing with a dictionary or `Map` object.  The use of private member variables should be strongly considered.   N.B., this will require changes in a few places throughout the application but the effort should be fairly minimal.

- Modify the application to accept an array of numbers to test and, upon completion, return an array of results with each member of the array having shape of `{TestNumber : XXXX, IsPrime: true|false}` (where "XXXX" is the actual number to test and where the property "IsPrime" is _either_ the value true or false).  The results of this can be displayed in a table or just output to the console, depending upon the time left.