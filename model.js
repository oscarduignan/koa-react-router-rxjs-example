import Rx from 'rx';
import { filters } from './updates';
import { combineLatestAsStruct } from './utils';

export default function (updates) {
    var recipient = new Rx.BehaviorSubject();

    updates
        .filter(filters.changeRecipient)
        .subscribe(([, newRecipient]) => {
            recipient.onNext(newRecipient);
        });

    return combineLatestAsStruct({
        recipient
    });
};