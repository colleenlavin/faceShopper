import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))

import Face from './Face'

describe('<Face />', () => {
  let root
  let face = {
    created_at: "2017-06-13T21:25:42.092Z",
    description: "An American computer scientist and United States Navy rear admiral.",
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Grace_Hopper.jpg/220px-Grace_Hopper.jpg",
    price: 19.06,
    quantity: 7,
    title: "Grace Hopper",
    updated_at: "2017-06-13T21:25:42.092Z"
  }
  beforeEach('render the root', () =>
    root = shallow(<Face face={face}/>)
  )

  it('shows a title', () => {
    expect(root.find('h2')).to.have.length(1)
  })

})
