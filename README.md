# signal-notifier

A Node app using Express to take a form input and send it to a Signal group.
Great for managing RSVPs to parties or coordinating a rideshare to work.

## Requirements

- Depends on a configured and running instance of
  [signal-cli-rest-api](https://github.com/bbernhard/signal-cli-rest-api/)
- Signal

## Notes

The Signal protocol expects clients to receive messages periodically so there's
a `setInterval` that will periodically call the `/v1/receive` endpoint.
