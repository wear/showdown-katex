jest.dontMock('../showdown-katex');

describe('showdown-katex', function() {
  var showdownKatex = require('../showdown-katex');
  var katex = require('katex');

  it('can parse katex token', function() {
    var text = "```katex\n^x\n```"
    var res = showdownKatex()[0].filter(text)
    expect(katex.renderToString.mock.calls[0][0]).toBe('^x')
  });

  it('can parse multi katex token', function(){
    var text = "```katex\n^x\n```\n\n```katex\n^x\n```"
    var res = showdownKatex()[0].filter(text)
    expect(katex.renderToString.mock.calls.length).toBe(2)
    expect(katex.renderToString.mock.calls[0][0]).toBe('^x')
    expect(katex.renderToString.mock.calls[1][0]).toBe('^x')
  });
})
