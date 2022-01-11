// Some unions with common methods do not need type guards
// TS will throw errors if that is not the case
// As a result of supporting a union of multiple types, 
// TypeScript allows you to access properties that are common among the member types without any error.

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);