export class LoggingService {
    logInformation(message: string) {
        console.log(message);
    }
    logError(message: string) {
        console.error(message);
    }
}
