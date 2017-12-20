/* @flow */
import test from 'ava';
import helloWorld from '../src';

test('hello World!!!', async t => {
  t.is(helloWorld({message1: "hello", message2:"world!!!"}), 'hello world!!!');
});
