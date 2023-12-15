const LogLevel = {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
};

const logger = (level, ...messages) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[${level.toUpperCase()}]`, ...messages);
    }
};

logger.debug = (...messages) => logger(LogLevel.DEBUG, ...messages);
logger.info = (...messages) => logger(LogLevel.INFO, ...messages);
logger.warn = (...messages) => logger(LogLevel.WARN, ...messages);
logger.error = (...messages) => logger(LogLevel.ERROR, ...messages);

export default logger;