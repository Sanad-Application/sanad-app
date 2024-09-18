import {logger} from 'react-native-logs';

const log = logger.createLogger({
  levels: {
    info: 1,
    debug: 2,
    warn: 3,
    error: 4,
    server: 5,
    server_Error: 6,
  },
  transportOptions: {
    colors: {
      server: 'green',
      info: 'cyan',
      debug: 'blue',
      warn: 'yellow',
      error: 'pink',
      server_Error: 'red',
    },
  },
});

export default log;
