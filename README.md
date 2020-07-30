Shortcomings & Limitations:

The biggest limitation of these two methods is that they are iterating over the dataset multiple times. This wouldn’t be a problem with this data set as it’s quite small, but the method would be very slow if I had used it for a data set with thousands of entries. If this were the case, I would’ve used a custom for loop, with multiple conditions so that I was only iterating over the data once. This would considerably speed up the calculation time. 

getUsers:
1. Just returning the user id means I cannot extract more information from each data entry if I wanted to 
2. This method could return a user’s id twice if they had many matching records 

getPlaybackTime:
1. As the data is ordered by date_actioned, I can use the find method to identify the start time, however, if the data was ordered by another variable this method would not work
2. Currently we cannot see the “stop” action for user_id 3, therefore my method cannot calculate the total playtime for this user
3. If user_id 1 had two playback times that did not overlap, or if they started another playback later on in the data, my method would not account for this break in playtime, and would calculate the total time from the first “start” to the last “stop”
