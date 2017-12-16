'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardKicker = (0, _glamorous2.default)('h5')(function (props) {
  return {};
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

CardKicker.defaultProps = {};

exports.default = CardKicker;