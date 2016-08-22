/** @license MIT License (c) copyright 2016 Roman Pominov */

import {describe, it} from 'mocha'
import assert from 'assert'
import {observe} from 'most'

import Stream from '../src/index'

// Tests are loose because package wraps methods that
// are designed to be compatible with Fantasy Land.

describe('most-static-land', () => {
  it('empty', () => {
    return observe(x => { throw new Error('Shouldn\'t be called') }, Stream.empty())
  })
  it('concat', () => {
    return observe(x => { assert.strictEqual(x, 2) }, Stream.concat(Stream.empty(), Stream.of(2)))
  })
  it('of', () => {
    return observe(x => { assert.strictEqual(x, 2) }, Stream.of(2))
  })
  it('map', () => {
    return observe(x => { assert.strictEqual(x, 6) }, Stream.map(x => x * 3, Stream.of(2)))
  })
  it('ap', () => {
    return observe(x => { assert.strictEqual(x, 6) }, Stream.ap(Stream.of(x => x * 3), Stream.of(2)))
  })
  it('chain', () => {
    return observe(x => { assert.strictEqual(x, 6) }, Stream.chain(x => Stream.of(x * 3), Stream.of(2)))
  })
})
