import Home from './home'

describe('Home', () => {
  it('exists', () => {
    expect(Home).to.exist
  })
  it('run', () => {
    expect(Home()).to.be.true
  })
  it('works', () => {
    expect(true).to.be.true
  })
  it('works again'), () => {
    expect('hi').to.equal('hi')
  }
})