import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationService {
    public statusNotification = new EventEmitter<string>();
}
