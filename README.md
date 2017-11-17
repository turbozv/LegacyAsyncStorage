Repro project
 
 1) Checkout SDK15 branch and install on ios simulator -> Click "SetAnswerToAsyncStorage" (which calls AsyncStorage.setItem('ANSWER'))
 2) Checkout SDK17 branch (better be in a new folder) and install on ios simulator -> Click "GetAnswerFromLegacyAsyncStorage" (which calls LegacyAsyncStorage.getItem('ANSWER')), it returns null
 3) Checkout master branch (using SDK16) and install on ios simulator -> Click "GetAnswerFromLegacyAsyncStorage" (which calls LegacyAsyncStorage.getItem('ANSWER')), it returns the right value set in SDK15
