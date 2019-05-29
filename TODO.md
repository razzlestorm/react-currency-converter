1. Restrict JSON call to once per hour.
  1a. Assign fetched JSON data to its own object, THEN to the state (instead of realtime data being fetched on every refresh).
  1b. update object once per hour  https://stackoverflow.com/questions/19847412/call-a-function-every-hour    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
2. Allow users to select currencies that are displayed in an opt-in fashion
  2a. This will probably be with a component that gets the list of currencies from the state in a dropdown table.
  2b. Make dropdown table/currency list searchable
3. Provide common names for the three-letter names of currencies (can use OER's currencies.json for free).
4. Create a histogram for all the data.
  4a. This will mean needing to store data somehow.
5. Allow users to search for specific date ranges with my own data.
