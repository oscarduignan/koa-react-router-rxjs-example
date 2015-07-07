import Rx from 'rx';
import { filters } from './intents';
import { combineLatestAsStruct } from './utils';

export default function (intents) {
    var recipient = new Rx.BehaviorSubject();

    intents
        .filter(changeRecipient)
        .subscribe(([, newRecipient]) => {
            recipient.onNext(newRecipient);
        });

    return combineLatestAsStruct({
        recipient
    });
};