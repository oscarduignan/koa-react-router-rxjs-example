import Rx from 'rx';
import mapValues from 'lodash/object/mapValues';

export function combineLatestAsStruct(keysAndStreams) {
  var keys = Object.keys(keysAndStreams);
  var streams = keys.map(key => keysAndStreams[key]);
 
  return Rx.Observable.combineLatest(...streams, (...args) => {
    return mapValues(keysAndStreams, (value, key) => {
      return args[keys.indexOf(key)];
    });
  });
};